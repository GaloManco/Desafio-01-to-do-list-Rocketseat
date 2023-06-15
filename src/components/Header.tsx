import style from './Header.module.css';
import logo from '../assets/logoRocket.svg';

export function Header() {
    return (
        <header className={style.containerHeader}>
            <div className={style.logo}>
                <img src={logo} alt="Logo" />    
                <p>Logo</p>
            </div>
      </header>
    )
}
