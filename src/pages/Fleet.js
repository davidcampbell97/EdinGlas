import React from 'react'
import { FleetList } from '../helpers/FleetList'; 
import FleetItem from '../components/FleetItem';
import '../styles/fleet.css'


function Menu() {
    return (
      <div className="fleet">
        <h1 className="fleetTitle">Our Fleet</h1>
        <div className="fleetList">
          {FleetList.map((fleetItem, key) => {
            return (
              <FleetItem
                key={key}
                image={fleetItem.image}
                type={fleetItem.type}
              />
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Menu;