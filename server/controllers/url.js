const shortid = require('shortid');  // yeah genrate karega url 
const express =require('express');
const Url = require("../models/Url");  // bhaishab model hai yeah 

require("dotenv").config();


exports.linkshortner = async (req,res)=>{
    const {longUrl} = req.body;
    try {
        if(longUrl!=null){
        const generatedShortId  = shortid.generate();
        console.log(generatedShortId );
        const shortUrl = `${process.env.BASE_URL}/${generatedShortId}`;

        // save to database 
        const url = new Url({longUrl,shortUrl});
        await url.save();
        return res.status(201).json({shortUrl});
        }else{
          return  res.status(401).json({"message":"url not found"});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.redirector = async (req,res)=>{
    const { shortId } = req.params;
    try {
        const url = await Url.findOne({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
        if(url){
            url.clicks +=1;
            await url.save();
            return res.redirect(url.longUrl);
        }
        else{
            return res.status(404).json({"message":"Url not found try to create one"});
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error contact to support team ' });
    }
}

