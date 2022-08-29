import React from "react";
import s from './Footer.module.css'
import sC from "./../common/styles/Container.module.css";
import ItemsContainer from "./ItemsContainer";


function Footer () {



    return <div className={s.footerBlock}>
        <div className={` ${sC.container} ${s.footerContainer}`}>
            <h2>Name</h2>
            <div className={s.itemsContainer}>
                <ItemsContainer/>
                <ItemsContainer/>
                <ItemsContainer/>
                <ItemsContainer/>
            </div>
            <div><h2>2022</h2></div>
        </div>
    </div>
}

export default Footer