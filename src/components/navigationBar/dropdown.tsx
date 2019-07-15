import * as React from 'react';
import styles from './dropdown.module.scss';


export interface IProps {
}
 
export interface IState {
    
}
 
class Dropdown extends React.Component<IProps, IState> {
    // state = {}

    render() { 

        return ( 
            <section className={styles.dropdown}>
                <ul className={styles.allLinks}>
                    <li>CV</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </section>
         );
    }
}
 
export default Dropdown;