import styled from "styled-components";
import Middle from "./components/Middle.jsx";
import React, {useEffect , useState} from 'react';
export const base_url ="http://localhost:9000/"
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[buttonvalue,setbuttonvalue] = useState("All");
  const[filtered,setfiltered] = useState(null)
  const[inputvalue,setinputvalue] =useState()
  const[isvisited,setisvisited] = useState(false)

  useEffect(() => {
    fetch(`${base_url}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!data) return;
     let filterd = data;
    if (buttonvalue !== "All"){
     filterd = filterd.filter((food) =>
        food.type.toLowerCase().includes(buttonvalue.toLowerCase())
      );
      // setfiltered(filterd);
    }
    

    if(inputvalue && inputvalue.trim() !== ""){
      filterd = filterd.filter((val) => 
        val.name.toLowerCase().includes(inputvalue.toLowerCase())
      );

    }
    setfiltered(filterd)


  }, [data, buttonvalue,inputvalue])

  
  
  
//   useEffect(() =>{
//  if(!data)  return;

//     if(inputvalue === null){
//       setfiltered(data)
//     }else{
//     const filterds =data.filter((val) => 
//     val.name.toLowerCase().includes(inputvalue.toLowerCase())
//     );
//     setfiltered(filterds)
//   }
//   },[data,inputvalue])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  var butt  = ["All","Breakfast","Lunch","Dinner"]

  const btn =(value) =>{
setbuttonvalue(value);
setisvisited(true)
  }
  return (
    <Maincontainer>
      <Topcontainer>
        <div className='div1'>
          <img src='/Foody Zone.svg' alt="foody zone" />
          <input 
          value ={ inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        type="text" placeholder="search the food" />
        </div>
        <div className='div2'>
         {butt.map((value,index)=>(
          <Button
          onClick={() => btn(value)}
          key={index}
          visited ={buttonvalue === value}
          >{value}</Button>
         ))}
        </div>
      </Topcontainer>
      <Middle data={filtered || data} />
    </Maincontainer>
  );
};

export default App;

const Maincontainer =styled.div`
height:100vh;
`

const Topcontainer = styled.section`
background-color:#5d5a5a;
height:25vh;
width:100%;
display:grid;
justify-content:center;
align-items:center;

.div2{
  margin:25px auto;
  display:flex;
}
.div1{
  align-items:center;
  width:70vw;
  height:5vh;
  /* border:2px solid blue; */
  margin-top:25px;
  display:flex;
  justify-content:space-between;
flex-wrap:wrap;
gap:10px;
} 
img{
 height:100%;
}
input{
    
    height:100%;
    width:250px;
    background-color:#5d5a5a;
     border-radius:10px;
     outline:none;
     border:2px solid red;
     padding:10px;
     font-size:large;
     color:white;
    &::placeholder{
      color:white;
      font-size:large;
    }
  }
`

const Button =styled.button`
height:40px;
background-color:#ff4343;
color:white;
padding:10px;
border-radius:10px;
outline:none;
margin:0 7px;
border:none;
font-size:large;
cursor:pointer;
size:x-large;
border:${(props) => props.visited ? "2px solid white" : "none"};
&:hover{
  border:2px solid white;
}
`