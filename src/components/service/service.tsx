import * as React from 'react';
import styles from './service.module.scss';
import { faUserTie, faGavel, faUserSecret, faHandsHelping, faSitemap, faChartLine, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export interface IProps {
    skill: string;
    icon: any;
}
 
export interface IState {
    
}
 
class Service extends React.Component<IProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
            <article className={styles.service}>
                <div>
                    <FontAwesomeIcon icon={this.props.icon} className={styles.fontAwesomeIcon}/>
                </div>

                <h2 className={styles.skill}>{this.props.skill}</h2>
            </article>
         );
    }
}
 
export default Service;