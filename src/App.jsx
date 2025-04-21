import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import FitbitHero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import ProductCarousel from './components/ProductCarousel'
import Offer from './components/Offer'
import ReadyFeatures from './components/Features'
import Article from './components/Article'
import Premium from './components/Premium'
import Accessories from './components/Accessories'
import Enterprise from './components/Enterprise'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

function App() {

  return (
    <>
      <div className="  h-screen">
      <Header />
        <main>
          <FitbitHero />
          <ProductCategories />
          <ProductCarousel />
          <Offer />
          <ReadyFeatures />
          <Article />
          <Premium />
          <Accessories />
         <FAQ />
          <Enterprise /> 
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
