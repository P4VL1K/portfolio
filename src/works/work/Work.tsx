import React from "react";
import s from './Work.module.scss'
import Tilt from "react-parallax-tilt";

type WorkPropsType = {
    picture: string
    projectTitle: string
    description: string
    style: {
        backgroundImage: string
    }
    address: string
}

function Work(props: WorkPropsType) {
    return (
        <Tilt tiltEnable={false} scale={0.9} transitionSpeed={3000}>
            <div className={s.work}>
                <a href={props.address} target={"_blank"}>
                    <div className={s.image} style={{backgroundImage: props.style.backgroundImage}}>

                    </div>

                    <div className={s.ptAndDescr}>
                        <h5>{props.projectTitle}</h5>
                        <p>{props.description}</p>
                    </div>
                </a>
            </div>
        </Tilt>
    )
}


export default Work