import * as React from 'react';
import styles from './service.module.scss';

export interface IProps {
    skill: string;
}
 
export interface IState {
    
}
 
class Service extends React.Component<IProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
            <article className={styles.service}>
                <div>

                </div>
                <h2>{this.props.skill}</h2>
            </article>
         );
    }
}
 
export default Service;