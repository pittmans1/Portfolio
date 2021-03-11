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
  const one = "https://api.adviceslip.com/advice"

  function App(props) {

        const[advice, adviceData]=useState("")

        useEffect(() => {
            axios.get(one)
            .then(res => {
                adviceData(res.data.slip.advice)
            })
        }, [])
      return(
          
              <div id="navBar">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/why">WHY? We all need advice!</Link>

                  <Switch>
                  <Route exact path="/"><Home advice={advice}/></Route>
                  <Route path="/about"><About /></Route>
                  <Route path="/why"><Why /></Route>
                  </Switch>
              </div>
              

          
      )
  }

  export default App