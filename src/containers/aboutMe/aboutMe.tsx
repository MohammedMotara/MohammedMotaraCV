import * as React from 'react';
import Service from '../../components/service/service';
import styles from './aboutMe.module.scss';
import { servicesArray } from '../../assets/HardCodedData/aboutMeData';
import { any, string } from 'prop-types';
import { firestore } from "../../firebase"; 

export interface IProps {

}
 
export interface IState {
    introductionPara1: string;
}
 
class AboutMe extends React.Component<IProps, IState> {    
    public state = {
        introductionPara1: "",
    }

    getFirestoreData: any = () => {
        const ref = firestore.collection('about_me').doc('BABiIESKjtFee8QUCRsU')
        return ref.get()
        .then(
            doc => {
                if (!doc.exists) {
                    console.log('No such documnt exists');
                } else {
                    const exampleDataStore = doc.data();
                    console.log(exampleDataStore);
                    alert('hello');
                }
            }
        )
    };

    componentWillMount() {
        this.getFirestoreData();
    }

    componentDidMount() {
        
    }
    
    public render() { 
        return ( 
            <section className={styles.aboutMePageContainer}>

                <div className={styles.mainProfilePicture}/>
                <div className={styles.personalBlurb}>
                    <h1 className={styles.name}>Mohammed Motara</h1>
                    <h2 className={styles.currentRole}>DevOps</h2>

                    <p className={styles.aboutMePara1}>
                        Welcome to my site. This site is intended to give you a brief snippet into 
                        what I can offer you. Please explore the site and contact me below If you'd like
                        more information.
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

                {/* <section className={styles.introductorySection}>
                    <h3 className={styles.servicesSectionTitle}>What can I do?</h3>
                    
                    <div className={styles.services}>
                        {
                            servicesArray.map((service) => 
                                <Service 
                                    skill={service.service} 
                                    icon={service.serviceIcon} 
                                    key={servicesArray.indexOf(service)}
                                />)
                        }
                    </div>

                    <section className={styles.clientsAndPreviousWork}/>
                    
                </section> */}
            </section>
        );


    }
}
 
export default AboutMe;