import React from "react"
import { Header } from "../common/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginPage from "../login"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"
import { Details } from "../home/details/Details"
import { Shop } from "../Shop"
import About from "../about"
import Contact from "../contact"
import Signup from "../register";
import Appoint from "../appointment";
import ProductDetail from "../Productdetail"
import PaymentPage from "./payment"
import { Provider } from "react-redux"
import FeedForm from "../feedback"
export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>

        <Header />
        <Switch>
          <Route exact path='/'>
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path='/cart/:id'>
            <Details />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/feedback'>
            <FeedForm />
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
          <Route exact path='/appoint'>
            <Appoint/>
          </Route>
          
        
          <Route path="/products/:id" >
            <ProductDetail/>
          </Route>
          <Route exact path="/details/:id" component={Details} />
        <Route exact path="/payment" component={PaymentPage} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}
