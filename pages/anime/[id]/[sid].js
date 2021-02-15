import React from "react";
import Head from 'next/head'
import { getEpisodeLinks } from "animu-desu";

export const getServerSideProps = async (context) => {

    const id = context.query.id
    const sid = context.query.sid

    try {
        const anim = await getEpisodeLinks(id.toString(), parseInt(sid));
        const ani = anim[0]
        return {
            props:{
              ani
            }
          }
    } catch (error) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },    
        }
    }
};
  

export default function Videos( {ani} ){ 

    return (
    <div>
        <Head>
            <link href="https://unpkg.com/video.js/dist/video-js.min.css" rel="stylesheet"/>
            <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
        </Head>
        <div className="text-white flex flex-col h-screen justify-center items-center m-2">
            <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12">
                <video id="my-player" className="video-js vjs-default-skin vjs-fluid" controls preload="auto" data-setup='{}'>
                    <source src={ani.link} type="video/mp4"></source>
                </video>
            </div>
                <a href={ani.link} download className="bg-green-600 text-white text-lg font-semibold text-center mt-2 rounded-md shadow-md hover:bg-green-900 p-3 mb-4 outline-none block">DOWNLOAD</a>
        </div>
    </div> 
    );
  };