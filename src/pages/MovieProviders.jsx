import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, API_TOKEN, API_URL, IMG_URL } from '../_helper/apiUrl';

const MovieProviders = () => {
  const [providers, setProviders] = useState([]);


  // get the providers data
  useEffect(()=>{

    async function fetchData () {
      try {
        const response = await axios.get(`${API_URL}/watch/providers/movie`, {
          params: {
            api_key: API_KEY,
            language: 'en-US', 
          },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer'+ API_TOKEN, // get the token from local storage
          },
        })
        setProviders(response.data.results);
        console.log(response.data.results);
      } catch (e) { console.error(e, 'movie-provider catch error'); }
    }

    fetchData();
  }, [])


  return (
    <div className='py-20'>
      <div className="container">
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-5'>Movie Providers</h2>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          {providers.map(provider => (
            <div key={provider.provider_id} className="p-5 bg-gray-800 rounded-md">
              <img src={IMG_URL+provider.logo_path} alt={provider.provider_name} className='w-full h-20 object-contain' />
              <h3 className='text-white mt-4 text-lg md:text-xl font-semibold text-center'>{provider.provider_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieProviders