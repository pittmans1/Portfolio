import React, {useState, useEffect} from "react"
import {
    Switch,
    Link,
    Route
  } from "react-router-dom"
  import About from "./advice/About"
  //import Advice from "./Advice"
  import Why from "./advice/Why"
  import Home from "./Home"
  const axios = require('axios')
  const one = "https://api.adviceslip.com/advice/search/love"
  const two = "https://api.adviceslip.com/advice/search/life"
  const three = "https://api.adviceslip.com/advice"

  function App(props) {

        const[loveAdvice, adviceDataLove]=useState("")
        const[lifeAdvice, adviceDataLife]=useState("")
        const [Advice, adviceDataRandom]= useState("")
        useEffect(() => {
            axios.get(one)
            .then(res =>{
                adviceDataLove(res.data.slips)
            })
        }, [])
        useEffect(()=>{
            axios.get(two)
            .then(res => 
               { adviceDataLife(res.data.slips)
            })
        },[])
        useEffect(() => {
            axios.get(three)
            .then(res =>{
                adviceDataRandom(res.data.slip.advice)
            })
        })
      return(
          <div>
              <div id="navBar">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/why">WHY? We all need advice!</Link>
                </div>
                  <Switch>
                  <Route exact path="/"><Home loveAdvice={loveAdvice} lifeAdvice={lifeAdvice} Advice={Advice}/></Route>
                  <Route path="/about"><About /></Route>
                  <Route path="/why"><Why /></Route>
                  </Switch>
              </div>
              

          
      )
  }

  export default App