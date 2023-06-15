import style from './Header.module.css';
import logoRocket from '../assets/logoRocket.svg';
export function Header(){
    return(
        <header className={style.header}>
            <div className={style.divLogo}>
                <img src={logoRocket} alt="" />
                <strong>to<span>do</span></strong>

            </div>
        </header>
    )
}