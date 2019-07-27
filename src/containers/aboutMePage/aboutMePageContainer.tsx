import * as React from 'react';
import Service from '../../components/service/service';
import styles from './aboutMePageContainer.module.scss';
import { servicesArray } from '../../assets/HardCodedData/aboutMePageData';

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

        return ( 
            <section className={styles.aboutMePageContainer}>
            {console.log(this.props.menuStatus)}

                <div className={styles.mainProfilePicture}/>
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
                        my experiences, whether that is through my writing/commentary or via the tangible
                        results I have produced when changing workflows and processes in my roles.
                    </p>

                    <button className={styles.downloadCVButton}>Formal CV</button>
                </div>

                <section className={styles.introductorySection}>
                    <h3 className={styles.servicesSectionTitle}>What can I do?</h3>
                    
                    <div className={styles.services}>
                        {servicesArray.map((service) => 
                            <Service skill={service} key={servicesArray.indexOf(service)}/>
                        )}
                    </div>

                    <section className={styles.clientsAndPreviousWork}/>
                    
                </section>
            </section>
         );
    }
}
 
export default AboutMe;