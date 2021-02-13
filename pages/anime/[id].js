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

  return (
    <Layout>
      <div className="flex flex-col flex-wrap items-center m-4">
        <p>{anime.title}</p>
        {isAmp ? (
          <amp-img className="rounded-3xl" width="320" src={anime.Image} alt="a cool image" layout="responsive"/>
          ) : (
          <img className="rounded-3xl" width="320" src={anime.image} alt="a cool image" />
          )}
          <p>{anime.summary}</p>
          <p>Status: {anime.status}</p>
          <p>Total Episodes: {anime.totalEpisodes}</p>            
          <p>Type: {anime.type}</p>
      </div>
    </Layout>
  );
};