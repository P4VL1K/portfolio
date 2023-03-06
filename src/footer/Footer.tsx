import React from "react";
import s from './Footer.module.scss'
import sC from "./../common/styles/Container.module.css";
import {Fade} from "react-awesome-reveal";
import {FacebookSvg, LinkedinSvg, TelegramSvg, VkontakteSvg} from "../common/components/svg/FooterSvg";


function Footer() {

    return <div className={s.footerBlock}>
        <div className={` ${sC.container} ${s.footerContainer}`}>
            <div className={s.title}>
                <h2>Pavel Budchanin</h2>
            </div>
            <div className={s.itemsContainer}>
                <Fade direction="up" triggerOnce={true}>
                    <div className={s.item}><a href="https://www.linkedin.com/in/pavel-budchanin-4bbb48250/" target={"_blank"}><LinkedinSvg/></a></div>
                    <div className={s.item}><a href="https://t.me/pashabnn" target={"_blank"}><TelegramSvg/></a></div>
                    <div className={s.item}><a href="https://vk.com/bnn22lb" target={"_blank"}><VkontakteSvg/></a></div>
                    <div className={s.item}><a href="#" target={"_blank"}><FacebookSvg/></a></div>
                </Fade>
            </div>
            <div>
                <h3>2023 All Right Reserved.</h3>
            </div>
        </div>
    </div>
}

export default Footer