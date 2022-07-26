import { useState } from 'react';
import './InputForm.css';
import GetAsteroid from './GetAsteroid';


function InputForm(){
    const [idValue, setIdValue]= useState('');
    const [target, setTarget]= useState('');

    const handleID = event =>{
      event.preventDefault();
      // console.log(event.target.value);  
      setIdValue(event.target.value);   
    }

    const apiHandler=async ()=>{
      const response= await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${idValue}?api_key=ouqLd2zdi6hc1GTgjWrJ5ZWRn5l2xw6p2CbqNaHJ
      `);
      const data= await response.json();

      setTarget(data.name);

      // console.log(data);
      // console.log(data.name);
    }

    const randomApihandler= async()=> {
      const [maximum, minimum]= [19,0];
      var randomValue = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

      const response= await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ouqLd2zdi6hc1GTgjWrJ5ZWRn5l2xw6p2CbqNaHJ`);
      const data=  await response.json();
      // const target = data.near_earth_objects[randomValue].name
      setTarget(data.near_earth_objects[randomValue].name)
    }

    return(
        <form >
  <div>
    <label htmlFor='text' >Enter ID</label>
    <input id='text' type="number" onChange={handleID} />
  </div>

  <div>
    <button className="g-button g-button-submit" type='submit' onClick={apiHandler}>Submit</button>
  </div>
  
  <div>
  <button className="g-button g-button-submit" type='submit' onClick={randomApihandler}>Generate Random</button>
  </div>
  {idValue}
  <div className="output">
      {target}
  </div>
    </form>  
    );
} 
export default InputForm;