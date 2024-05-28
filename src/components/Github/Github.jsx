import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/RohitDeveloper7')
    //     .then( response => response.json() )
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="text-center bg-success">
                <h1>Github followers: {data?.followers}</h1>
            </div>
            <div className="">
                <img className='img img-fluid w-25' src={data?.avatar_url} alt="" />
            </div>
        </div>
    </div>
  )
} 

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RohitDeveloper7')
    return response.json()
}