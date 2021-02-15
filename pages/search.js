import React, { useState } from 'react'
import {useRouter} from 'next/router'

export default function Search(){ 

    const router = useRouter()
    
    const [state, setstate] = useState("")

    async function callback(e) {
      e.preventDefault()
      let sta = ""
      const st = state.trim()
      if(st.split(" ").length > 1){
       sta = st.replaceAll(" ", "-").toLowerCase()
      }else{
        sta = st.toLowerCase()
      }
        router.push({
        pathname: '/results/[id]',
        query: { id: sta },
        })
    }
  
    return (
        <div className="text-white flex flex-col h-screen flex-wrap justify-center items-center m-4 text-lg">
            <form onSubmit={callback}>
                <input value={state} onChange={(e)=>setstate(e.target.value) } type="search" placeholder="name of anime...." className="bg-white text-black h-10 px-5 pr-10 rounded-full focus:outline-none" />
                <button type="submit">
                <span className="ml-2 inline-block hover:text-blue-300">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </button>
            </form>

            <div>
            </div>
        </div> 

    );
  };