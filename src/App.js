import React from "react";

import { About, Header, Skills, Works, Testimonials, Footer } from "./container/index.container";

const App = () => {
    return(
        <div className="app">
            <h1>Hello App Page</h1>
            <Header />
            <About />
            <Works />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App;