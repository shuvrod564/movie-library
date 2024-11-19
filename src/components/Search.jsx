import axios from 'axios';
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { API_KEY, API_URL } from '../_helper/apiUrl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { IoCloseOutline } from 'react-icons/io5';

const Search = ({resSearch, setResSearch}) => {
  const [search_movies, setSearchMovies] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // handle search request
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (search === '') {
      toast.error('Please enter a search keyword');
    } else {
      try {
        const response = await axios.get(`${API_URL}/search/movie`, {
          params: {
            api_key: API_KEY,
            query: search,
            include_adult: false,
            language: 'en-US',
            page: 1,
          }
        });

        const search_movies = response.data.results;
        navigate(`/search`, { state: { search_movies } });
        // console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit} className={`bg-white lg:px-3 overflow-hidden rounded-full flex items-center gap-3 max-w-lg  absolute lg:static top-0 search__box ${resSearch ? 'show' : ''}`}>
        <input
          type="text"
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full h-12 lg:px-4 pl-10 pr-3 py-3 font-semibold text-black outline-none ring-0 flex-1'
          placeholder='Search here...'
        />
        <button type='submit' className="text-xl flex justify-center items-center text-black w-10 h-10 rounded-full absolute lg:static top-1 left-0">
          <FiSearch />
        </button>
        <button type='button' onClick={()=>setResSearch(!resSearch)} className="text-2xl flex justify-center items-center text-black w-10 h-10 rounded-full lg:hidden">
          <IoCloseOutline />
        </button>
      </form>
    </>
  );
};

export default Search;
