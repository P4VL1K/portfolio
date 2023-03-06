import React from "react";
import s from './FormContact.module.scss';
import {Fade} from "react-awesome-reveal";


function FormContact () {


    return (
            <form className={s.formContacts}>
                <div>
                    <Fade direction="left" triggerOnce={true} duration={1500}>
                    <input type="text" name="formName" placeholder="Your Name"/>
                    </Fade>
                </div>
                <div>
                    <Fade direction="right" triggerOnce={true} duration={1500}>
                    <input type="email" name="formEmail" placeholder="Your E-mail"/>
                    </Fade>
                </div>
                <div>
                    <Fade direction="left" triggerOnce={true} duration={1500}>
                    <textarea name="message" placeholder="Type your message"/>
                    </Fade>
                </div>
                <Fade direction="right" triggerOnce={true} duration={1500}>
                <button type="submit" className={s.button}>Send message</button>
                </Fade>
            </form>
    )
}

export default FormContact