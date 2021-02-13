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
      <div>Hello World</div>
      <div className="flex flex-wrap justify-around">
        {popular.map ( (pop) => {
          return (
            
            <div key={pop.id}  className="m-4 w-1/4 shadow-lg flex-grow-1">

              {isAmp ? (
              <amp-img className="text-center" width="350" height="350" src={pop.Image} alt="a cool image" layout="responsive"/>
              ) : (
              <img className="text-center" width="350" height="350" src={pop.image} alt="a cool image" />
              )}
              <p>{pop.title}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  );
}