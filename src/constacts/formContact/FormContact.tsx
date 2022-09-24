import React from "react";
import s from "../Contacts.module.css";


function FormContact () {


    return (
            <form className={s.formContacts}>
                <input style={{height: '70px', width: '100%', maxWidth: '400px'}}/>
                <input style={{height: '70px', width: '100%', maxWidth: '400px'}}/>
                <textarea style={{height: '70px', width: '100%', maxWidth: '400px'}}/>
            </form>
    )
}

export default FormContact