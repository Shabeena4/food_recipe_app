import React,{useState} from 'react'
import Products from './Products'
const App=()=>{
const [search,setSearch]=useState("");
const [data,setData]=useState([]);
const YOUR_APP_ID="6598db9b";
const YOUR_APP_KEY="7cb0055d63ac9bbf7de4b8f22e31de51";
const submitHandler=e=>{
  e.preventDefault();
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&Calories=591-722&health=alcohol-free`).then(
    response=>response.json()

  ).then(
    data=>setData(data.hits)
  )
}
  return(
<div>
  <center>
  <h1>Food Recipe App</h1><br/>
 
  <form onSubmit={submitHandler}>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
    <input type="submit" className="btn btn-primary" value="Search"/>
  </form>
  {data.length>=1 ? <Products data={data}/>:null}
  </center>
</div>
  )
}
export default App