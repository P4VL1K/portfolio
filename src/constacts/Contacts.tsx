import React from 'react'
import s from './Contacts.module.scss'
import sC from "../common/styles/Container.module.css";
import FormContact from "./formContact/FormContact";
import {Button} from "@mui/material";

function Contacts() {


    return (
    <div className={s.contactsBlock}>
        <div className={` ${sC.container} ${s.contactsContainer}`}>
            <div className={s.title}>
                <h2>Contacts</h2>
            </div>
            <div className={s.contacts}>
                <FormContact/>
            </div>
            <div className={s.button}>
                <Button variant="outlined" className={s.button}>send</Button>
            </div>
        </div>
    </div>
    )
}

export default Contacts