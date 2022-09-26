import React from 'react'
import './ComunityHome.css'
import {useState, useEffect} from 'react'

const ComunityHome = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  

    useEffect(() => {
      fetch('http://localhost:8080/businesscards/users')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="container_users"> 
        <h1>Users</h1>
        <div className='scrollable-div'>
        <ul>
          {items.map(item => (
            <li key={item.id}>
            
              <h4>Name: {item.name}</h4>
              <h4>Surname: {item.surname}</h4>
              <h4>Age: {item.dateofbirth}</h4>
              <h4>Profession: {item.jobtitle}</h4>
              <h4>Phone Number: {item.phnnum}</h4>
              <h4>Email: {item.email}</h4>
              <h4>Site: {item.website}</h4>
              <div className="image">
            <img src={item.image} alt=''/>
            </div>              
            </li>
          ))}
        </ul>
        </div>
        </div>
      );
    }
  }

export default ComunityHome