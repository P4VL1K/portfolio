import React from "react";
import s from './Work.module.scss'
import {Button} from "@mui/material";

type WorkPropsType = {
    picture: string
    projectTitle: string
    description: string
    style: {
        backgroundImage: string
    }
}

function Work(props: WorkPropsType) {
    return (
        <div className={s.work}>
            <div className={s.image} style={{backgroundImage: props.style.backgroundImage}}>
                <div>
                    <Button variant="contained" className={s.button}>watch</Button>
                </div>
            </div>
            <div className={s.ptAndDescr}>
                <h5>{props.projectTitle}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}


export default Work