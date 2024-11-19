import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const movies = location.state || { movies: [] };
  console.log(movies);

  return (
    <div className='py-24'>
      <div className="container">
        <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4 gap-y-8">
          {
            movies.search_movies?.length > 0 ? (
              movies.search_movies?.map(movie => {
                return (
                  <div key={movie.id}>
                    <div className="text-left"> 
                      <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        className='w-full h-auto rounded-xl aspect-[16/24] object-contain bg-slate-600 flex items-center justify-center'
                      />
                      <h2 className='mt-3 text-base md:text-lg font-semibold'>{movie.title}</h2>
                      <p className="mb-3">{movie.release_date}</p>
                      {/* <p>{movie.overview}</p> */}
                      <Link to={'/movie-detail?id='+movie.id} className=' bg-lime-50 px-4 py-1.5 rounded-lg text-black font-medium text-sm mt-3'>Read More</Link>
                    </div>
                  </div>
                )
              }) 
            ) : (
              <p className=' bg-red-200 border border-red-500 px-4 py-5 text-red-700 bg-opacity-15 col-span-4 rounded-lg text-lg'>No movies found</p> 
            )
          } 
        </div>
         

      </div>
    </div>
  )
}

export default SearchPage