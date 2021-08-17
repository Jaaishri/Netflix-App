import React from 'react';
import ReactDOM from  'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

//console.log(Sdata);

function netflixCard(val){         //function netflixCard(val)
  console.log(val);
  return(
    <Card 
imgsrc= {val.imgsrc}
title = {val.title}
sname = {val.sname}
link = {val.link}
/>

  )
}


ReactDOM.render(
  <>
  <h1 className = "heading_style"> list of top 5 Netflix series in 2021</h1>



{Sdata.map(netflixCard)} 
  </>,
  document.getElementById('root')
);



//Short cut  method to write map 
// {Sdata.map((val,index) => {         //function netflixCard(val)
  
//   return(
//     <Card 
// imgsrc= {val.imgsrc}
// title = {val.title}
// sname = {val.sname}
// link = {val.link}
// />

//   );
// })
// }