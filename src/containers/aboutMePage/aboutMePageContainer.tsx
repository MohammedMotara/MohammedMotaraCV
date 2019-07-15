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
                        Welcome to my site. This site is intended to give you a short snippet into 
                        what I can offer you. Please explore the site and read my content.
                    </p>

                    <p className={styles.aboutMePara2}>
                        One of the most important traits I pride myself on is my commercial 
                        curiosity. Therefore, It's no suprise, that one of my favourite questions
                        to ask is: why? I hope that as a reader you can see this question throughout
                        my experiences, whether that is through my blog posts or through the tangible
                        results I have produced through changing workflows and processes in my roles.
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