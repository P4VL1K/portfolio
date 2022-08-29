import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import DistWork from "./distWork/DistWork";
import Contacts from "./constacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
