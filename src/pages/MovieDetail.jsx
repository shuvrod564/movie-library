import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieID = searchParams.get('id');

  // get the api url and token
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const options = {
    method: 'GET',
    url: `${apiUrl}/movie/${movieID}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`
    }
  };

  useEffect(() => {
    if (movieID) {
      axios(options)
        .then(function (response) {
          // handle success
          setMovieData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [movieID]);



  // 2024-08-13 date format change to May 05 2023
  function formatDate(dateStr){
    const date = new Date(dateStr);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
  }

  return (
    <div>
      {/* <h1>Movie Detail</h1> */}
      {movieData && (
        <div className="py-20">
            <div className="container">
                {/* <img 
                    src={`${import.meta.env.VITE_IMG_URL}${movieData.backdrop_path}`} 
                    alt={movieData.title} 
                    className='w-full h-auto rounded-xl bg-slate-600 flex items-center justify-center'
                /> */}

                <div className='flex items-end text-left gap-5 lg:gap-8 max-w-[1000px] mx-auto'>
                    <div className="w-1/3">
                        <img 
                            src={`${import.meta.env.VITE_IMG_URL}${movieData.poster_path}`} 
                            alt={movieData.title} 
                            className='w-full h-auto rounded-xl object-contain bg-slate-600 flex items-center justify-center'
                        />
                    </div> 
                    <div className="w-[66%]">
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-3'>{movieData.title}</h2>
                        <p className='mb-4'>{movieData.overview}</p> 
                        <div className="flex flex-wrap gap-3">
                            <div className="bg-white text-black px-4 py-1.5 rounded-md">{movieData.status}</div>
                            <div className="px-4 py-1.5 rounded-md inline-flex items-center gap-2"><SlCalender /> {movieData.release_date.split("-")[0]}</div>
                            <div className="px-4 py-1.5 rounded-md inline-flex items-center gap-2"><FaStar /> {movieData.vote_average}</div>
                        </div>
                        <table className="w-full my-6">
                          <tbody>
                            <tr>
                              <td className='px-2 py-0.5 text-right w-32 text-sm'>Runtime:</td>
                              <td className='px-2 py-0.5'>{movieData.runtime} minutes</td>
                            </tr>
                            <tr>
                              <td className='px-2 py-0.5 text-right w-32 text-sm'>Genres:</td>
                              <td className='px-2 py-0.5'>{movieData.genres.map((genre) => genre.name).join(", ")}</td>
                            </tr>
                            <tr>
                              <td className='px-2 py-0.5 text-right w-32 text-sm'>Production:</td>
                              <td className='px-2 py-0.5'>
                                {
                                  movieData.production_countries?.map((country, index)=>{
                                     return (
                                      <span key={index}>{country.name}</span>
                                    )
                                   
                                  })
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='px-2 py-0.5 text-right w-32 text-sm'>Production:</td>
                              <td className='px-2 py-0.5'>
                                {
                                  movieData.production_companies?.map((production,index)=>{
                                     return (
                                      <>
                                      <span key={index}>{production.name}</span>,&nbsp; 
                                      </>
                                    )
                                   
                                  })
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='px-2 py-0.5 text-right w-32 text-sm'>Release Date:</td>
                              <td className='px-2 py-0.5'>{formatDate(movieData.release_date)}</td>
                            </tr>
                            <tr>
                              <td className='px-2 py-0.5 text-right w-32 text-sm'>Popularity:</td>
                              <td className='px-2 py-0.5'>{movieData.popularity.toFixed(0)}</td>
                            </tr>
                          </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
