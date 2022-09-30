import React from "react";
import s from './Footer.module.scss'
import sC from "./../common/styles/Container.module.css";
import ItemsContainer from "./Items/ItemsContainer";


function Footer() {

    return <div className={s.footerBlock}>
        <div className={` ${sC.container} ${s.footerContainer}`}>
            <div className={s.title}>
                <h2>Name</h2>
            </div>

            <div className={s.itemsContainer}>
                <ItemsContainer/>
                <ItemsContainer/>
                <ItemsContainer/>
                <ItemsContainer/>
            </div>
            <div>
                <h2>2022</h2>
            </div>
        </div>
    </div>
}

export default Footer