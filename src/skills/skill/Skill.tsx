import React from "react";
import s from './Skill.module.css'


type SkillsPropsType = {
    title: string
    descriprion: string
}

function Skill (props: SkillsPropsType ) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <div className={s.description}>{props.descriprion}</div>
        </div>
    )
}

export default Skill