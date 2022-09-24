import React from "react";
import s from './Skills.module.css'
import sC from "./../common/styles/Container.module.css";
import Skill from "./skill/Skill";


function Skills () {
    return (
        <div className={s.skillsBlock}>
            <div className={` ${sC.container} ${s.skillsContainer}`}>
                <div className={s.title}>
                    <h2>Skills</h2>
                </div>
                <div className={s.skills}>
                <Skill title={'JS'} descriprion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'}/>
                <Skill title={'CSS'} descriprion={'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'}/>
                <Skill title={'REACT'} descriprion={'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills