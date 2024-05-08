import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Breadcrumb from './components/Breadcrumb.jsx'
import Math from './Pages/Math.jsx'
import FAQ from './Pages/FAQ.jsx'

const breadcrumbItems = [
  { label: 'Home', url: '/' },
  { label: 'Flashcard', url: '/products' },
  { label: 'Mathematics', url: '/products/electronics' },
  { label: 'Realtion and Function', url: '/products/electronics/smartphones' }
];


function App() {

  return (
    <div className='pr-12 pl-12 mb-56'>
      <Navbar/>
      <Breadcrumb items={breadcrumbItems}/>
      <Math title="Relations and Functions ( Mathematics )"/>
      <FAQ />

    </div>
  )
}

export default App
