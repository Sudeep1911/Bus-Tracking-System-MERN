import {React,useState,useEffect} from 'react';
import './showBus.css'; // Import the CSS file
import axios from 'axios';


const ShowBus = () => {
  const [buslist,setbuslist]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/buses').then((allBuses)=>{
        setbuslist(allBuses.data);
    })
  },[])
  return (
    <div className="bus-table-container">
      <table className="bus-table">
        <thead>
          <tr>
            <th>Bus Name</th>
            <th>Type</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {buslist.map((bus, index) => (
            <tr key={index}>
              <td>{bus.name}</td>
              <td>{bus.type}</td>
              <td>{bus.source}</td>
              <td>{bus.destination}</td>
              <td>{bus.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBus;
