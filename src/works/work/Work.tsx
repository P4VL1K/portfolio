import React from "react";
import s from './Work.module.css'

type WorkPropsType = {
    picture: string
    projectTitle: string
    description: string
}

function Work(props: WorkPropsType) {
    return (
        <div className={s.work}>
            <div className={s.pictureAndBtn}>
                <div>
                    {props.picture}
                </div>
                <div>
                    <button className={s.button}>
                        watch
                    </button>
                </div>
            </div>
            <div className={s.ptAndDescr}>
                <div>{props.projectTitle}</div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}


export default Work