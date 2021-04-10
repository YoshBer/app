import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {NavBar} from "./components/navBar"
import {Footer} from "./components/footer"
import {Tester} from "./views/voltage"
import {Resistencia} from "./views/resistencia"
import {Intensidad} from "./views/intensidad"
import {Potencia} from "./views/potencia"

export const App = props => {
    return (
        <>
         <BrowserRouter>
            <NavBar/>
            <Switch>
               <Route exact path="/app">
                  <Tester/>
               </Route>
               <Route exact path="/resistencia">
                  <Resistencia/>
               </Route>
               <Route exact path="/intensidad">
                  <Intensidad/>
               </Route>
               <Route exact path="/potencia">
                  <Potencia/>
               </Route>
            </Switch>
            <Footer/>
         </BrowserRouter>
        </>
    )
}