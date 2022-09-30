import React from "react";
import s from './Skill.module.scss'


type SkillsPropsType = {
    title: string
    descriprion: string
}

function Skill (props: SkillsPropsType ) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.descriprion}</p>
        </div>
    )
}

export default Skill