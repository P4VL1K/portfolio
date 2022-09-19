import React from 'react'
import s from './DistWorks.module.css'
import sC from "../common/styles/Container.module.css";


function DistWork () {
    return (
    <div className={s.distWorkBlock}>
        <div className={` ${sC.container} ${s.distWorkContainer}`}>
            <b>Looking into remote work options</b>
            <button>Hire me</button>
        </div>
    </div>
    )
}

export default DistWork
