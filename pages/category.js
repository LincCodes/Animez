import React from "react";
import Link from "next/link";
import { getGenreList } from "animu-desu";

export const getStaticProps = async () =>{

  const arr = await getGenreList();

  const gen = arr.map ((a) =>{
    return a.split(" ").join("-")
  })

  return {
    props: {
      gen,
      revalidate: 86400,
    }
  }
}

export default function Category ({gen}) {

  return (
    <div>
      <p className="heading text-center font-medium text-2xl m-5 text-gray-100 min-h-screen">CATEGORY</p>
      <div className="flex flex-wrap justify-around">
        {gen.map( (g, i) => {
          return (
            <div key={i}  className="m-2 w-2/3 sm:w-1/3 md:w-1/4 shadow-xl flex-grow-1 border rounded-md border-gray-800">
              <Link href="category/[id]" as={`category/${g}`}><a>
                <p className="text-center py-6 text-white">{g}</p>
              </a></Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}