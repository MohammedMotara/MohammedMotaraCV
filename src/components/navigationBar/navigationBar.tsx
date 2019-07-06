import * as React from 'react';
import styles from './navigationBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
export interface IProps {
    
}
 
export interface IState {
    
}
 
class NavigationBar extends React.Component<IProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
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
                    <div className={styles.faBars}>
                        <FontAwesomeIcon className={styles.logo} icon={faBars}/>
                    </div>

                </div>

            </section>
         );
    }
}
 
export default NavigationBar;