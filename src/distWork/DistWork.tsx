import React from 'react'
import s from './DistWorks.module.scss'
import sC from "../common/styles/Container.module.css";
import {Button} from "@mui/material";


function DistWork () {
    return (
    <div className={s.distWorkBlock}>
        <div className={` ${sC.container} ${s.distWorkContainer}`}>
            <div className={s.title}>
                <h3>Looking into remote work options</h3>
            </div>
            <Button variant="outlined" className={s.button}>Hire me</Button>
        </div>
    </div>
    )
}

export default DistWork
