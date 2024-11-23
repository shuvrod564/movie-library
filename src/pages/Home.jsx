import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Heading from '../components/Heading';
import { API_URL } from '../_helper/apiUrl';

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movies, setMovies] = useState([]);
  const [collections, setCollections] = useState([]);
  console.log(collections, 'movies');
  // search for movies




  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + apiToken
    }
  };
 

  const collectionOptions = {
    method: 'GET',
    url: `${API_URL}/search/collection`,
    params: {include_adult: 'false', language: 'en-US', page: '1'},
    headers: {accept: 'application/json'}
  };

  

 
  useEffect(() => {
    axios(options)
      .then(function (response) {
        // handle success
        setMovies(response.data.results);
        // console.log(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // collection fetch
    axios
    .request(options)
    .then(function (res) {
      // console.log(res.data, 'collection')
      setCollections(res.data.results);
    })
    .catch(err => console.error(err));



  }, []);


  return (
    <div>

      <div className="py-20 text-left">
        <div className="container">
          <Heading title="Popular Movies" level="1" />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4 gap-y-8">
            {
              movies.slice(0, 8).map((movie) => (
                <div key={movie.id}>
                  <div className="">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className='w-full h-auto rounded-xl aspect-[16/24] object-contain bg-slate-600 flex items-center justify-center'
                    />
                    <div className="flex items-start gap-4 justify-between mt-3">
                      <h2 className='text-base md:text-lg font-semibold text-ellipsis overflow-hidden'>
                        <Link to={'/movie-detail?id=' + movie.id} className=' text-primary'>{movie.title}</Link></h2>
                      <div className="bg-primary px-2 py-0 5 rounded-md">
                        {(movie?.vote_average).toFixed(2)}
                      </div>
                    </div>
                    {/* <p className="mb-3">{movie.release_date}</p> */}
                    {/* <p>{movie.overview}</p> */}

                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <Heading title="Collections" level="2" />
        </div>
        {/* container */}
      </div>
    </div>
  )
}

export default Home