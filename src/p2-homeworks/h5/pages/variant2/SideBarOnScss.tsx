import React, {useState} from "react";
import s from "../../Header.module.scss";
import {Link} from "react-router-dom";
import {PATH} from "../../RoutesFunk";

export const SideBarOnScss = () => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    return <div className={s.bodyComponent}>
        <p className={s.commander}>Кликни на кнопку!</p>
        <div className={s.wrapper}>
            <div className={toggleMenu ? s.menuListAnimate : s.menuList}>
                <ul className={s.menuList}>
                    <li className={s.menuListItem}><Link to={PATH.PRE_JUNIOR}>Pre Junior</Link></li>
                    <li className={s.menuListItem}><Link to={PATH.JUNIOR}> Junior</Link></li>
                    <li className={s.menuListItem}><Link to={PATH.JUNIOR_PLUS}>Junior plus</Link></li>
                </ul>
            </div>
            <div className={s.button} onClick={() => {
                setToggleMenu(!toggleMenu)
            }}>
                <span className={s.buttonLine}></span>
                <span className={s.buttonLine}></span>
                <span className={s.buttonLine}></span>
            </div>

        </div>
    </div>
}
