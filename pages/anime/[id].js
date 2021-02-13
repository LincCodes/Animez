import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAnimeDetails } from "animu-desu";
import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }


export const getServerSideProps = async (context) => {

  const id = context.query.id
  const anime = await getAnimeDetails(id.toString())
  
  if (!anime) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },    
    }
  }
  
  return {
    props:{
      anime,
    }
  }
};

export default function Anime( {anime} ){
  const isAmp = useAmp()

  let final = new Array();
  for(let i = 1; i>anime.totalEpisodes; i++ ){
    final.push(<li key={i}>{i}</li>);
  }

  return (
    <Layout>
      <div className="flex flex-col flex-wrap items-center m-4">
        <p className="text-gray-300">{anime.title}</p>
        {isAmp ? (
          <amp-img className="rounded-3xl" width="300" src={anime.Image}  layout="responsive"/>
          ) : (
          <img className="rounded-3xl" width="300" src={anime.image} />
          )}
          <p className="text-gray-300">{anime.summary}</p>
          <p className="text-gray-300">Status: {anime.status}</p>
          <p className="text-gray-300">Total Episodes: {anime.totalEpisodes}</p>            
          <p className="text-gray-300">Type: {anime.type}</p>
          <ul>{final}</ul>
      </div>
    </Layout>
  );
};