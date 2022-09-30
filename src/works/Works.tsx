import React from "react";
import s from './Works.module.scss'
import sC from './../common/styles/Container.module.css'
import Work from "./work/Work";
import socialImage from './../assets/image/socialNetwork.jpg'
import todoImage from './../assets/image/todolist.jpg'

function Works() {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={s.worksBlock}>
            <div className={` ${sC.container} ${s.worksContainer}`}>
                <div className={s.title}>
                    <h2>Projects</h2>
                </div>
                <div className={s.works}>
                    <Work style={social}
                          picture={''}
                          projectTitle={'Social network'}
                          description={'Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.'}/>
                    <Work style={todolist}
                          picture={''}
                          projectTitle={'Todo list'}
                          description={'Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.'}/>
                </div>
            </div>
        </div>
    )
}

export default Works