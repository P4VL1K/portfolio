import React from "react";
import s from "./Main.module.scss";
import sC from "./../common/styles/Container.module.css";
import {Particle} from "../common/components/Particle";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {Fade} from "react-awesome-reveal";
import mainImg from './../assets/image/portfolio.jpg'

function Main() {

    const myPhoto = {
        backgroundImage: `url(${mainImg})`
    }

    return (
        <div id="main" className={s.mainBlock}>
            <Particle/>
            <div className={`${sC.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <Fade direction="left" triggerOnce={true}>
                        <h1>Pavel Budchanin</h1>
                    </Fade>
                    <Fade direction="right" triggerOnce={true}>
                        <ReactTypingEffect text="FRONTEND DEVELOPER"/>
                        <p>Hi, I`m Pavel Budchanin and I am frontend developer who dream making the world better by creating captivating products.</p>
                    </Fade>
                </div>
                <Fade direction="down" triggerOnce={true}>
                    <Tilt transitionSpeed={5000}>
                        <div className={s.photo} style={{backgroundImage: myPhoto.backgroundImage}}></div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    )
}

export default Main