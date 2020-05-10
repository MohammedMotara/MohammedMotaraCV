import * as React from 'react';
import styles from './aboutMe.module.scss';
import { firestore } from "../../firebase"; 

export interface IProps {

}
 
export interface IState {
    introductionContent: object;
}

export interface IIntroductionContent {
    introductionPara1: string,
    introductionPara2: string,
    name: string,
    role: string
}
 
class AboutMe extends React.Component<IProps, IState> {    
    public state = {
        introductionContent: {
            introductionPara1: '',
            introductionPara2: '',
            name: '',
            role: ''
        },
    }

    componentDidMount() {

        const getFirestoreData = () => {
            const ref = firestore.collection('about_me').doc('BABiIESKjtFee8QUCRsU');
            
            ref.get()
            .then(
                doc => {
                    const firebaseData = {...doc.data()};
                    
                    const updateState = () => {
                        this.setState({
                            introductionContent: firebaseData
                        })
                    };
                    updateState();
                }
            )
        };
        getFirestoreData();
    }

    public render() { 
        return ( 
            <section className={styles.aboutMePageContainer}>

                <div className={styles.mainProfilePicture}/>
                <div className={styles.personalBlurb}>
                    <h1 className={styles.name}>{this.state.introductionContent.name}</h1>
                    <h2 className={styles.currentRole}>{this.state.introductionContent.role}</h2>

                    <p className={styles.aboutMePara1}>{this.state.introductionContent.introductionPara1}</p>

                    <p className={styles.aboutMePara2}>{this.state.introductionContent.introductionPara2}</p>

                    <button className={styles.downloadCVButton}>Formal CV</button>
                </div>
            </section>
        );
    }
}
 
export default AboutMe;