import React from "react";
import s from './Works.module.scss'
import sC from './../common/styles/Container.module.css'
import Work from "./work/Work";
import socNetworkImg from './../assets/image/socNetworkImg.jpg'
import todolistImg from './../assets/image/todolistImg.png'
import cardsImg from './../assets/image/cardsImg.png'
import counterImg from './../assets/image/counterImg.png'
import {Fade} from "react-awesome-reveal";

type ProjArrType = {
    id: number
    image: {
        backgroundImage: string
    }
    title: string
    description: string
    address: string
}

function Works() {

    const social = {
        backgroundImage: `url(${socNetworkImg})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
    const cards = {
        backgroundImage: `url(${cardsImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }

    let projArr: ProjArrType[] = [
        {id: 1, image: todolist, title: 'Todo list', description: 'Complex project that using React-hooks, Redux, Axios and Rest API', address: 'https://p4vl1k.github.io/todo-list-dimych/'},
        {id: 2, image: cards, title: 'Learning app', description: 'SPA for learning. Allows creating and editing your own card packs and cards. Using simple smart random for learning. Created by group of developers', address: "https://cards-nikskozlov.vercel.app/"},
        {id: 3, image: social, title: 'Social network', description: 'Developers social network. Many features still in progress. But you can use base functions of any social network', address: "https://p4vl1k.github.io/soc-net/"},
        {id: 4, image: counter, title: 'Counter', description: 'Counter is a test project which (to tell the truth) doesn\'t have a lot of practical use. It allows to do some settings which influence on the way how the counter works.', address: "https://p4vl1k.github.io/counter-pro/"}
    ]

    return (
        <div id="projects" className={s.worksBlock}>
            <div className={` ${sC.container} ${s.worksContainer}`}>
                <div className={s.title}>
                    <Fade direction="up" triggerOnce={true}>
                        <h2>Projects</h2>
                    </Fade>
                </div>
                <div className={s.works}>
                    {projArr.map(el =>
                        <Work style={el.image}
                              picture={''}
                              projectTitle={el.title}
                              description={el.description}
                              address={el.address}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Works