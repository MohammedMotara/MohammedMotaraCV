import * as React from 'react';
import styles from './navigationBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Dropdown from './dropdown';

export interface IProps {
    updateMenuStatus: () => void,
    menuStatus: boolean, 
}
 
export interface IState {
    menuOpen: boolean;

}
 
class NavigationBar extends React.Component<IProps, IState> {
    public state = { 
        menuOpen: this.props.menuStatus
     };

     
    public render() { 
        // const openDropDown = this.props.menuStatus ? styles.showDropDown: "";

        return (
            <section>
                {/* {console.log(this.props.menuStatus)} */}
            <section className={styles.navigationBar}>
                <div className={styles.profileSection}>
                    <div className={styles.picture} />
                    <h1 className={styles.name}>Mo Motara</h1>
                </div>

                <ul className={styles.navigationLinks}>
                    <li className={styles.navigationItem}>About Me</li>
                    <li className={styles.navigationItem}>CV</li>
                    <li className={styles.navigationItem}>Projects</li>
                    <li className={styles.navigationItem}>Blog</li>
                    <li className={styles.navigationItem}>Contact</li>
                </ul>

                <div className={styles.socialLinks}>

                    <div className={styles.faTwitter}>
                        <FontAwesomeIcon className={styles.logo} icon={faTwitterSquare}/>
                    </div>
                    <div className={styles.faMedium}>
                        <FontAwesomeIcon className={styles.logo} icon={faMedium}/>
                    </div>
                    <div className={styles.faLinkedin}>
                        <FontAwesomeIcon className={styles.logo} icon={faLinkedin}/>
                    </div>
                    <div className={styles.faBars} onClick={this.props.updateMenuStatus}>
                        <FontAwesomeIcon className={styles.logo} icon={faBars}/>
                    </div>
                </div>
            </section>
        </section>
            
         );
    }



}
 
export default NavigationBar;