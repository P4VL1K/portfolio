import React from 'react'
import s from './DistWorks.module.css'
import sC from "../common/styles/Container.module.css";


function DistWork () {
    return (
    <div className={s.distWorkBlock}>
        <div className={` ${sC.container} ${s.distWorkContainer}`}>
            <div className={s.title}>
                <h3>Looking into remote work options</h3>
            </div>
            <button>Hire me</button>
        </div>
    </div>
    )
}

export default DistWork
