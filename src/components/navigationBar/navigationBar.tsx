import * as React from 'react';
import styles from './navigationBar.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class NavigationBar extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <section className={styles.navigationBar}>
                <div className={styles.profileSection}>
                    <div className={styles.picture} />
                    <h1 className={styles.name}>Mohammed Motara</h1>
                </div>

                <ul className={styles.navigationLinks}>
                    <li className={styles.navigationItem}>About Me</li>
                    <li className={styles.navigationItem}>Resume/CV</li>
                    <li className={styles.navigationItem}>Portfolio</li>
                    <li className={styles.navigationItem}>Blog</li>
                    <li className={styles.navigationItem}>Contact</li>
                </ul>

                <div className={styles.socialLinks}>
                    <div className={styles.socialButton}></div>
                    <div className={styles.socialButton}></div>
                    <div className={styles.socialButton}></div>
                </div>

            </section>
         );
    }
}
 
export default NavigationBar;