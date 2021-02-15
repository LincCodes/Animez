import React from "react";
import Link from "next/link";
import { searchByGenre } from "animu-desu";
import Image from 'next/image';

export const getServerSideProps = async (context) => {

  const id = context.query.id
  try {
    const anim = await searchByGenre(id.toString())
    const anime = anim[0]
    return {
        props:{
          anime,
        }
      }
} catch (error) {
    return {
        redirect: {
          destination: '/catergory',
          permanent: false,
        },    
    }
}
};

export default function Genre( {anime} ){
  return (
    <div>

<div className="heading text-center font-medium text-2xl m-5 text-gray-100 min-h-screen">GENRE</div>
  <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {anime.map( (pop) => {
          return (
            <div key={pop.id}>
            <Link href="../anime/[id]" as={`../anime/${pop.id}`}><a>
            <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
              <Image src={pop.image} width={500} height={500} layout="responsive"/>
              <div className="desc p-4 text-gray-800 h-24 flex justify-center items-center">
                <p className="font-bold block cursor-pointer hover:text-black text-center">{pop.title}</p>
              </div>
            </div>
              </a>
              </Link>
            </div>
          )
        })}
    </div>

    </div>
  );

};