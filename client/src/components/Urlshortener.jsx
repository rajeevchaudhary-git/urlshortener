import axios from 'axios';
import React from 'react';

function Urlshortener() {
    const [longUrl, setlongUrl] = React.useState(''); 
    const [flag, setflag] = React.useState(false); 
    const [shortenlink,setshortlink] = React.useState(" ");

    const shortlink =async()=>{
      const url = 'https://sxs-five.vercel.app/short';
      
      const response = await axios.post(url,{longUrl});
      setshortlink(response.data.shortUrl);
    //   console.log(response.data.shortUrl);
      setflag(true);
      
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div className="text-center">
                <h2 className="text-white text-4xl mt-3">Let's shorten the links</h2>
                <div className="mt-6">
                    <input 
                        className="p-2 w-[500px] rounded-md h-[50px]" 
                        placeholder="Enter the Long Url" 
                        value={longUrl} 
                        type="text" 
                        onChange={(e) => setlongUrl(e.target.value)} 
                    />
                </div>
                <div className="mt-6">
                <input 
                        className={`${flag?'':'hidden'} p-2 w-[500px] rounded-md h-[50px]`}  
                        value={shortenlink} 
                        type="text" 
                        disabled
                    />
                </div>
                <div className="mt-6">
                   <button type='button' onClick={shortlink} className='bg-orange-500 p-3 rounded-md hover:bg-green-300 transition-all duration-500 shadow-emerald-300 text-ellipsis font-semibold'>Short Link</button>
                </div>
            </div>
        </div>
    );
}

export default Urlshortener;
