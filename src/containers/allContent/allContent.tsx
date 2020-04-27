import * as React from 'react';
import NavigationBar from '../../components/navigationBar/navigationBar';
import AboutMe from '../aboutMe/aboutMe';
import Experiences from '../experiences/experiences';
import Abilities from '../abilities/abilities';
import Projects from '../projects/projects';
import ContactMe from '../contactMe/contactMe';

export interface IProps {
    
}
 
export interface IState {
}
 
class AllContent extends React.Component<IProps, IState> {
    public state = { 
    }

    public render() { 
        return (
        <section>
            <AboutMe/>
            <Experiences />
            <Abilities />
            <Projects />
            <ContactMe />
        </section>
         )
    };

}

 
export default AllContent;