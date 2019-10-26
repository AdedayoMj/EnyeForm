import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import InputForm from './Components/Dashboard/Form'
import Home from './Components/Dashboard/Home'
import Error from './Components/Layout/Error'


export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path ="/" component ={Home}/>
      <Route exact path ="/form" component ={InputForm}/>
      <Route component={Error}/> 
      </Switch>


    </div>
    </BrowserRouter>
    )
  }
}

