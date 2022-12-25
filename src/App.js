import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

import algeria from './countries/algeria.png'
import argentina from './countries/argentina.png'
import australia from './countries/australia.png'
import austria from './countries/austria.png'
import belgium from './countries/belgium.png'
import bosnia from './countries/bosnia.png'
import brazil from './countries/brazil.png'
import canada from './countries/canada.png'
import croatia from './countries/croatia.png'
import denmark from './countries/denmark.png'
import finland from './countries/finland.png'
import japan from './countries/japan.png'
import korea from './countries/korea.png'
import mexico from './countries/mexico.png'
import mongolia from './countries/mongolia.png'
import morocco from './countries/morocco.png'
import newZealand from './countries/newZealand.png'
import norway from './countries/norway.png'
import portugal from './countries/portugal.png'
import russia from './countries/russia.png'
import serbia from './countries/serbia.png'
import { click } from '@testing-library/user-event/dist/click';




const App = () => {
  const [score, setScore] = useState({
    current: 0,
    highest: 0
    
  })
  const [clicked, setClicked] = useState({
    countries: []
  })

  const [country, setCountry] = useState({
    algeria: [algeria, 'Algeria', 0],
    argentina: [argentina, 'Argentina', 1],
    australia: [australia, 'Australia', 2],
    austria: [austria, 'Austria', 3],
    belgium: [belgium, 'Belgium', 4],
    bosnia: [bosnia, 'Bosnia', 5],
    brazil: [brazil, 'Brazil', 6],
    canada: [canada, 'Canada', 7],
    croatia: [croatia, 'Croatia', 8],
    denmark: [denmark, 'Denmark', 9],
    finland: [finland, 'Finland', 10],
    japan: [japan, 'Japan', 11],
    korea: [korea, 'Korea', 12],
    mexico: [mexico, 'Mexico', 13],
    mongolia: [mongolia, 'Mongolia', 14],
    morocco: [morocco, 'Morocco', 15],
    newZealand: [newZealand, 'New Zealand', 16],
    norway: [norway, 'Norway', 17],
    portugal: [portugal, 'Portugal', 18],
    russia: [russia, 'Russia', 19],
    serbia: [serbia, 'Serbia', 20]
  })
  
  const randomCountry = () =>{
    let countryIndex = []
    let countries = []
    for (let i = 0; i < 4; i++){
      let randomNum = Math.floor(Math.random() * 20)
      while(countryIndex.some(n => n === randomNum)){
        randomNum = Math.floor(Math.random() * 20)
      }
      countryIndex.push(randomNum)
    }
    for(let c in country){
      countryIndex.forEach(e => {
        if(country[c][2] == e){
          countries.push(country[c])
        }
      })
    }
    return countries;
  }

  let randomCountryArr = randomCountry()
  /*
  console.log(randomCountryArr[0][2]);
  console.log(randomCountryArr[1][2]);
  console.log(randomCountryArr[2][2]);
  console.log(randomCountryArr[3][2]);
  */
  
  useEffect(() => {
    console.log(clicked.countries);
    
  }, [clicked])
  
  
  function handleClick(countryIndex){
    
    
    if(clicked.countries < 1 || !clicked.countries.includes(countryIndex)){
      setClicked({countries: [...clicked.countries, countryIndex]});
      setScore(prevScore => ({...prevScore, current: prevScore.current + 1}));
      randomCountryArr = randomCountry();
      
      
    } else if (clicked.countries.includes(countryIndex)){
      
      setClicked(prevClicked => ({...prevClicked, countries:[]}))
      console.log(clicked.countries)
      if(score.current > score.highest){
        setScore(prevScore => ({...prevScore, highest: score.current}))
      }
      setScore(prevScore => ({...prevScore, current: 0}))
      randomCountryArr = randomCountry();
    }
  }
  

 

  return (
    <div className='container'>
      <h2 className='header'>Countries Memory Game</h2>
      <div className='score'>
        <div className='current'>{score.current}</div>
        <div className='highest'>{score.highest}</div>
      </div>
      
      <div className='cardContainer'> 
        <div className='card1'>
          <img src={randomCountryArr[0][0]} alt='' id='country1' onClick={() =>handleClick(randomCountryArr[0][2])}/>
          <div className='countryName'>{randomCountryArr[0][1]}</div>
        </div>
        <div className='card2'>
          <img src={randomCountryArr[1][0]} alt='' id='country2' onClick={() =>handleClick(randomCountryArr[1][2])}/>
          <div className='countryName'>{randomCountryArr[1][1]}</div>

        </div>
        <div className='card3'></div>
          <img src={randomCountryArr[2][0]} alt='' id='country3' onClick={() =>handleClick(randomCountryArr[2][2])}/>
          <div className='countryName'>{randomCountryArr[2][1]}</div>
        <div className='card4'>
        <img src={randomCountryArr[3][0]} alt='' id='country4' onClick={() =>handleClick(randomCountryArr[3][2])}/>
          <div className='countryName'>{randomCountryArr[3][1]}</div>

        </div>

      </div>


     
    </div>
  );
}

export default App;
