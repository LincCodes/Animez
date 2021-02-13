import React from "react";
import Link from "next/link";
import Image from 'next/image'
import Layout from "../components/Layout";
import { getPopular } from "animu-desu";
import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

export const getStaticProps = async () =>{

  const popular = await getPopular(1)

  return {
    props: {
      popular
    }
  }
}

export default function Movies ({popular}) {
  console.log(popular)
  const isAmp = useAmp()

  return (
    <Layout>
      <p className="text-white text-center text-2xl font-bold font-mono">POPULAR</p>
      <div className="flex flex-wrap justify-around">
        {popular.map ( (pop) => {
          return (
            
            <div key={pop.id}  className="m-2 w-fill sm:w-1/3 md:w-1/4 shadow-xl flex-grow-1 border rounded-md border-gray-800">
              <Link href="anime/[id]" as={`anime/${pop.id}`}><a>
                {isAmp ? (
                <amp-img className="" width="350" height="350" src={pop.Image} alt="a cool image" layout="responsive"/>
                ) : (
                <img className="" width="350" height="350" src={pop.image} alt="a cool image" />
                )}
                <p className="text-center text-white">{pop.title}</p>
              </a></Link>
            </div>
          )
        })}
      </div>
    </Layout>
  );
}