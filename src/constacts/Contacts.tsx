import React from 'react'
import s from './Contacts.module.scss'
import sC from "../common/styles/Container.module.css";
import FormContact from "./formContact/FormContact";
import {Fade} from "react-awesome-reveal";

function Contacts() {


    return (
    <div id="contacts" className={s.contactsBlock}>
        <div className={` ${sC.container} ${s.contactsContainer}`}>
            <div className={s.title}>
                <Fade direction="up" triggerOnce={true}>
                    <h2>Contacts</h2>
                </Fade>
            </div>
            <div className={s.contacts}>
                <FormContact/>
            </div>
        </div>
    </div>
    )
}

export default Contacts