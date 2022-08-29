import React from 'react'
import s from './Contacts.module.css'
import sC from "../common/styles/Container.module.css";
import FormContact from "./formContact/FormContact";

function Contacts() {


    return (
    <div className={s.contactsBlock}>
        <div className={` ${sC.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>Contacts</h2>
            <div className={s.contacts}>
                <FormContact/>
            </div>
            <div>
                <button>send</button>
            </div>
        </div>
    </div>
    )
}

export default Contacts