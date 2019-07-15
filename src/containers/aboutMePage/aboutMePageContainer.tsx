import * as React from 'react';
import NavigationBar from '../../components/navigationBar/navigationBar';
import styles from './aboutMePageContainer.module.scss';

export interface IProps {
    menuStatus: boolean, 
}
 
export interface IState {
    menuOpen: boolean,
}
 
class AboutMe extends React.Component<IProps, IState> {
    public state = {
        menuOpen : this.props.menuStatus
    }

    public render() { 

        const fixMargin = this.props.menuStatus ?  styles.adjustedMarginProfilePicture: styles.mainProfilePicture;

        return ( 
            <section className={styles.aboutMePageContainer}>
            {console.log(this.props.menuStatus)}

                <div className={`${fixMargin} ${styles.adjustedMarginProfilePicture}`}/>
                <div className={styles.personalBlurb}>
                    <h1 className={styles.name}>Mohammed Motara</h1>
                    <h2 className={styles.currentRole}>DevOps</h2>

                    <p className={styles.aboutMePara1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p className={styles.aboutMePara2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <button className={styles.downloadCVButton}>Formal CV</button>
                </div>

                <section className={styles.introductorySection}>

                    <section className={styles.services}>
                        <h3>What can I do?</h3>

                    </section>

                    <section className={styles.clientsAndPreviousWork}>
                    
                    </section>

                </section>


            </section>
         );
    }
}
 
export default AboutMe;