import React from "react";
import { Navbar } from "./components";
import { Abouts, Header, Skills, Works, Testimonials, Footer  } from "./container";


import './App.scss'

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <Header />
            <Abouts />
            <Works />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App;