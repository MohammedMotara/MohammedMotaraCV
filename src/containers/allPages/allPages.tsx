import * as React from 'react';
import NavigationBar from '../../components/navigationBar/navigationBar';
import AboutMe from '../aboutMePage/aboutMePageContainer';

export interface IProps {
    
}
 
export interface IState {
    menuOpen: boolean
}
 
class AllPages extends React.Component<IProps, IState> {
    public state = { 
        menuOpen: false
    }

    public render() { 
        return (
        <section>
                <NavigationBar updateMenuStatus={this.toggleMenu} menuStatus={this.state.menuOpen} />
                <AboutMe menuStatus={this.state.menuOpen}/>
        </section>
         )
    };

    private toggleMenu = ():void => {
        this.setState({
            menuOpen: !this.state.menuOpen,
        })
    }

}

 
export default AllPages;