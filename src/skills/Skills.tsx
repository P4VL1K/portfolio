import React from "react";
import s from './Skills.module.scss'
import sC from "./../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import {Fade} from "react-awesome-reveal";
import {Design, Development, Foundation, Testing} from "../common/components/svg/svg";

export type SkillType = {
    title: string
    description: string
    svg: JSX.Element
}

function Skills() {
    const array: SkillType[] = [
        {title: 'Development', svg: <Development/>, description: 'React, Redux, AXIOS etc'},
        {title: 'Foundation', svg: <Foundation/>, description: 'JavaScript, TypeScript, HTML5, CSS3'},
        {title: 'Testing', svg: <Testing/>, description: 'Unit Tests, SnapShot, Storybook'},
        {title: 'Design', svg: <Design/>, description: 'Material UI etc'}
    ]
    return (
        <div id="skills" className={s.skillsBlock}>
            <div className={` ${sC.container} ${s.skillsContainer}`}>
                <div className={s.title}>
                    <Fade direction="up" triggerOnce={true}>
                        <h2>Skills</h2>
                    </Fade>
                </div>
                <div className={s.skills}>
                    {array.map(i =>
                        <Skill title={i.title}
                               description={i.description}
                               svg={i.svg}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills