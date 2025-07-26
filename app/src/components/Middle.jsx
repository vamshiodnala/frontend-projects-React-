import styled from 'styled-components';
import React from 'react';
import {base_url} from '../App'

const Middle = ({ data }) => {
  
  
  return (
    <Mainly>
      <div className="items-container">
        {data.map((jhant, index) => (
          <Items key={index}>
            <div className="container">
                <div className="image-container">
              <img src={jhant.image}  />
              </div>
              <div className="info">
                <h3>{jhant.name}</h3>
                <p>{jhant.text}</p>
              </div>
            </div>
            <button>{"$" + jhant.price + ".00"}</button>
          </Items>
        ))}
      </div>
    </Mainly>
  );
};
export default Middle;


const Mainly = styled.div`
background-image:url('/bg.png');
background-size:cover;
height:100vh;
display:flex;
/* align-items:center; */
padding-top:40px;

/* display:flex;
width:100vw;
gap:20px;
flex-wrap:wrap; */
/* opacity:0.45; */

button{
     float:right;
    background-color:#ff4343;
    color:white;
    border:none;
    font-size:large;
    padding:5px;
    border-radius:10px;
    margin-bottom:10px;
    
    justify-content:flex-bottom;
}
.items-container{
    display:flex;
    width:60vw;
    height:50vh;
    flex-wrap:wrap;
    gap:15px;
    margin:20px auto;
    /* gap:30px; */
    /* margin:30px; */

   
}
`
const Items = styled.div`

backdrop-filter:blur(10px);

border-radius:20px;
padding:12px;
border:2px solid red;
width:340px;
height:175px;



img{
    width:133px;
    height:133px;
    border-radius:50%;
    /* border:2px solid red; */
    object-fit:cover;
}
.container{
    display:flex;
    gap:10px;
    justify-content:space-around;
    height:115px;
    p{
        font-size:15px;
    }
    .info{
        justify-content:flex-end;
    }
}
`

// const image = styled.div`
// border-radius:50%;
// height:30px;
// width:30px;
// `