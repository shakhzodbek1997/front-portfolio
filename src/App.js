import React from "react";
import { Navbar } from "./components";
import { About, Header, Skills, Works, Testimonial, Footer  } from "./container";


import './App.scss'

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Works />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default App;