import React from "react";
import s from "./Main.module.scss";
import sC from "./../common/styles/Container.module.css";

//1:25

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${sC.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <h5>Hi There</h5>
                    <h1>Jeffrey Aaron</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}

export default Main