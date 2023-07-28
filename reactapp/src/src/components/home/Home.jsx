import React from "react"

import {Testimonial} from "./testimonial/Testimonial";
import {Product } from "./product/Product"
import { Details } from "./details/Details"

import { Hero } from "./Hero/Hero"
import { TopProduct } from "./top/TopProduct"

export const Home = () => {
  return (
    <>
      <Hero />
      
      <Product />
      
      <TopProduct />
     
      <Testimonial />
      
    </>
  )
}
