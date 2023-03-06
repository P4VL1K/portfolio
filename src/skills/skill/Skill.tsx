import React from "react";
import s from './Skill.module.scss';
import {SkillType} from "../Skills";
import {Fade} from "react-awesome-reveal";

function Skill(props: SkillType) {
    return (
        <div className={s.skill}>
            <Fade direction="right" triggerOnce={true}>
            <div className={s.icon}>{props.svg}</div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
            </Fade>
        </div>
    )
}

export default Skill