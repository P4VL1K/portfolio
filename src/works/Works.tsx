import React from "react";
import s from './Works.module.css'
import sC from './../common/styles/Container.module.css'
import Work from "./work/Work";



function Works () {
    return (
        <div className={s.worksBlock}>
            <div className={` ${sC.container} ${s.worksContainer}`}>
                <div className={s.title}>
                    <h2 >Projects</h2>
                </div>
                    <div className={s.works}>
                        <Work picture={'should be a picture1'} projectTitle={'projectTitle1'} description={'description1'}/>
                        <Work picture={'should be a picture2'} projectTitle={'projectTitle2'} description={'description2'}/>
                    </div>
            </div>
        </div>
    )
}

export default Works