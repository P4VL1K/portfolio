import React, {useState} from "react";
import s from "./BurgerNav.module.scss"
import {Link} from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';

export const BurgerNav = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={s.burgerBtn} onClick={onBurgerButtonClick}><MenuIcon fontSize="medium"/></div>
        </div>
    )
}