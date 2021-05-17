import React, { useState } from 'react';
import { connect } from 'react-redux';


function Form({ setQuery , city, weathers}) {
  const [term, setTerm] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    setQuery(term);
  };
  console.log(`form term`, term);
  console.log(city);
  console.log("props weather",weathers )

  return (
    <form onSubmit={handleClick} className="search-form">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter your cityname"
      />
      <button type="button" onClick={()=>term()}>
        {' '}
        Search{' '}
      </button>
    </form>
    );

 
  
}

const mapDispatchToProps=(dispatch)=>{

console.log("dispatch form:",dispatch.selectCity);

return{city: dispatch.selectCity};

};

export default connect(mapDispatchToProps)
(Form);
