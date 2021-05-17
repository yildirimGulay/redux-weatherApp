
import React from 'react';
import { connect } from 'react-redux';

const WeatherApp = ({weathers}) => {
  console.log("weathers", weathers)
  const hava = weathers.map((items)=>
  
  <div key={items.cityName}>
      <div className="main-contanier">
        <h4>Live Weather Condition</h4>
       

        <h2>{items.main}</h2>

        <div className="temprature">
          <h1>{Math.floor(items.temp)}&deg;C</h1>
        </div>

        <div className="location">
          <h3>
            <i className="fa fa-street-view"></i> {items.cityName}, {items.countryName}
          </h3>
        </div>
      </div>
    </div>
  
  )
return (
    <div>
      {hava}
    </div>
  );
  
};

const mapStateToProps=(state)=>{

  console.log("state",state.weathers)
  return {weathers: state.weathers}
  
  }
export default connect(mapStateToProps)(WeatherApp);
