import React, { useState } from 'react';
import './App.css';
import Problem from './components/problem'

  const initialValues = {
    timeLimit: 2,
    boatLimit: 2,
    totalBoats: 20,
    travelTime: 10,
    boatCapacity: 6,
    unloadTime: 2,
    loadTime: 1,
  };

function App() {

  const [values, setValues] = useState(initialValues)

  const inputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const formSubmit = () => {
    const newValues = {
      timeLimit: values.timeLimit,
      boatLimit: values.boatLimit,
      totalBoats: values.totalBoats,
      travelTime: values.travelTime,
      boatCapacity: values.boatCapacity,
      unloadTime: values.unloadTime,
      loadTime: values.loadTime,
    }

    const stoneCalculator = (newValues) => {
      const { timeLimit, boatLimit, totalBoats, travelTime, boatCapacity, unloadTime, loadTime } = newValues

      if (2 * travelTime >= timeLimit * 60){
        return 0;
      } else if(boatLimit < totalBoats){
        return Math.min(
          (Math.floor(((timeLimit*60)/(travelTime*2)))-1) * boatLimit * boatCapacity + (Math.floor((timeLimit * 60 % (2*travelTime))/unloadTime)* boatLimit),
          Math.floor(((timeLimit*60) - (travelTime*2))/ unloadTime) * boatLimit,
          Math.floor(((timeLimit*60) - travelTime)/ loadTime) * boatLimit
        )
      } else {
        return Math.min(
          (Math.floor(((timeLimit*60)/(travelTime*2 + loadTime)))-1) * totalBoats * boatCapacity + (Math.floor((timeLimit * 60 % (2*travelTime))/unloadTime)* totalBoats),
          Math.floor(((timeLimit*60) - (travelTime*2))/ unloadTime) * totalBoats,
          Math.floor(((timeLimit*60) - travelTime)/ loadTime) * totalBoats 
        )       
      }
    }
    console.log(stoneCalculator(newValues))
};

  return (
    <React.Fragment>
      <nav>
        PYRAMIDS<span>R</span>US
      </nav>
      <main className='container'>
        <Problem
          values={values}
          change={inputChange}
          submit={formSubmit}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
