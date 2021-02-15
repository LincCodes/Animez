import React from "react";

export default function Anime( {anime} ){ 
  
    return (
        <div className="text-white flex flex-col flex-wrap justify-center items-center min-h-screen m-4 text-lg">
            <p className="text-center">😃 Hi, (Linc) I am the designer of this web app with the help of 3rd party online libraries.</p>
            <p className="text-center">I do NOT own any of the anime movies or series on this platform.</p>
            <p className="text-center">I don't like ads, so the app is ADS FREE.</p>
            <p className="text-center">ENJOY!!!!!!!!</p>
            <p className="text-center">NOTE:</p>
            <p className="text-center">If the video does not appear or shows an error, try reloading the page.</p>
            <p className="text-center">Avoid entering a wrong episode number in the input field because you will be redirected to the Homepage.</p>
            <p className="text-center">Join our <a href="https://t.me/freeanimez" className="text-blue-300">Telegram group</a> for questions, answers or any queries you might have during the operation of this web app. Don't be shy, we are all anime fans.</p>
            <div>
                <a href="https://t.me/freeanimez">
                    <span className="mt-3 inline-block hover:text-blue-600 text-blue-400">
                    <i className="fa fa-telegram fa-5x" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
        </div> 
    );
  };