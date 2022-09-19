import React from "react";
import s from "../Contacts.module.css";


function FormContact () {


    return (
            <form className={s.formContacts}>
                <div><input style={{height: '70px', width: '100%', maxWidth: '500px'}}/></div>
                <div><input style={{height: '70px', width: '100%', maxWidth: '500px'}}/></div>
                <div><textarea style={{height: '70px', width: '100%', maxWidth: '500px'}}></textarea></div>
            </form>
    )
}

export default FormContact