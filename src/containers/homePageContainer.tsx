import * as React from 'react';
import NavigationBar from '../components/navigationBar/navigationBar';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class HomePage extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            < NavigationBar />
         );
    }
}
 
export default HomePage;