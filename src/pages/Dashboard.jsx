import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const userName = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    
    // logout 
    const handleLogOut = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    }

    

    useEffect(()=>{

      const fetch = async () => {
        const options = {
          method: 'GET',
          url: 'https://real-time-amazon-data.p.rapidapi.com/deal-products',
          params: {
            country: 'US',
            sort_by: 'FEATURED',
            page: '1'
          },
          headers: {
            'x-rapidapi-key': 'c749e99fedmshcd872c57f3ae6a5p1060dcjsnf7d1175890a1',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      fetch();
    }, [])

     
  return (
    <div>
        Welcome - {userName.fullName}, {userName.email}
        <button type='button' onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default Dashboard