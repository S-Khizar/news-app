import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [news,setNews]=useState([]);
  const filterNews = async(category)=>{
    let link="";
    if(category && category !== "everything"){
      link=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=51619cf4e5d542f485e3c9f9894b3181`
    }else{
      link="https://newsapi.org/v2/everything?q=keyword&apiKey=51619cf4e5d542f485e3c9f9894b3181"
    }
    const {data} = await axios.get(link);
    setNews(data.articles);
  }
  useEffect(()=>{
    filterNews();
  },[])
  return (
    
    <>
      <Navbar filterNews={filterNews}/>
      <Home news={news}/>
      <Footer/>
    </>
  )
}

export default App
