import React, {useState} from "react";
import { useRouter } from 'next/router';
import { getAnimeDetails } from "animu-desu";

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

  const router = useRouter();

  const [state, setstate] = useState(1)

  function sub(e) {
    e.preventDefault();
    router.push({
      pathname: '/anime/' + anime.id + '/[sid]',
      query: { sid: state },
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg border border-gray-700 rounded-lg overflow-hidden my-4 w-11/12">
        <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-white font-semibold text-lg">{anime.title}</h1>
        </div>
        <div className="py-4 px-6">
            <div className="font-semibold text-gray-600">
              <form onSubmit={sub}>
                <label for="ep" className="block">Episode number:</label>
                <input id="ep" type="number" value={state} onChange={(e)=>setstate(e.target.value) } placeholder="Enter episode number...." className="flex-1 appearance-none rounded shadow border p-3 text-grey-dark mr-2 focus:outline-none"/>
                <input type="submit" className="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md outline-none hover:bg-blue-800 p-3" value="Play"/>
              </form>            
            </div>
            <p className="py-2 text-gray-700">{anime.summary}</p>
            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-sm">Total Episodes: {anime.totalEpisodes}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-sm">Status: {anime.status}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-sm">Type: {anime.type}</h1>
            </div>
        </div>
    </div>
  </div>
  );
};