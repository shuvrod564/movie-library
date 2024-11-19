import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import axios from 'axios'
import { API_KEY, API_URL } from '../_helper/apiUrl'
import { Link } from 'react-router-dom'
import { BsStar } from 'react-icons/bs'
import { BiStar } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'

const TVSeries = () => {
    const [series, setSeries] = useState([]);

    // get the data from api
    useEffect(()=>{
        // fetch data from API
        async function getData(){
            try {
                const data = await axios.get(`${API_URL}/tv/top_rated`, {
                    params: {
                        api_key: API_KEY,
                        language: 'en-US',
                        page: 1, 
                    }
                });
                console.log('Top Rated TV Series: ', data.data.results);
                // set the fetched data to the state
                setSeries(data.data.results);
            } catch (e) { console.log('tv series catch error: ', e); }
        }
        // call the function
        getData();
    }, [])

    return (
        <div>
            <div className="py-20">
                <div className="container">
                    <Heading title='Top Rated TV Series' lavel='2' />

                    <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4 gap-y-8">
                        {
                        series.slice(0, 16).map((series) => (
                            <div key={series.id}>
                            <div className=""> 
                                <img 
                                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} 
                                alt={series.name} 
                                className='w-full h-auto rounded-xl aspect-[16/24] object-contain bg-slate-600 flex items-center justify-center'
                                />
                                <h2 className='mt-3 text-base md:text-lg font-semibold mb-3'>{series.name}</h2>
                                <div className="flex flex-wrap gap-x-6 font-medium"> 
                                    <span className="mb-3">{(series.popularity).toFixed(0)}</span>
                                    <span className="mb-3 inline-flex items-center gap-1">
                                        <FaStar className=' text-orange-500' />
                                        {(series.vote_average).toFixed(0)}
                                    </span>
                                </div>
                                {/* <p>{series.overview}</p> */}
                                 
                            </div>
                            </div>
                        )) 
                        }
                    </div> 
                </div>
                {/* container */}
            </div>
        </div>
    )
}

export default TVSeries