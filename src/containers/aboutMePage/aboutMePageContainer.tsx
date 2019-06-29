import * as React from 'react';
import NavigationBar from '../../components/navigationBar/navigationBar';
import styles from './aboutMePageContainer.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class AboutMe extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <section className={styles.aboutMePageContainer}>
            
                <div className={styles.mainProfilePicture} />

                <div className={styles.personalBlurb}>
                    <h1 className={styles.name}>Mohammed Motara</h1>
                    <h2 className={styles.currentRole}>Product Developer</h2>
                    <p></p>
                    <p></p>
                </div>

                <div className={styles.introductorySection}>

                </div>
            </section>
         );
    }
}
 
export default AboutMe;