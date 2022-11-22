import React, {Component} from 'react'
import {ThemeContext} from "../contexts/ContextTheme"
import "./nav.css"


class NavBar extends Component {

    static ThemeContextType =  ThemeContext;

    render() { 
        console.log(this.context)
        const {isLightTheme, dark , light} = this.context
        const theme = isLightTheme? light : dark
        // style={{background:theme.ui , color:theme.syntax }}

        return (
        // <div  className ="nav"> 
        <nav  style={{background:'#FF5733' }}> 
            <h1>Context App</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                
            </ul>
            </nav>
        );
            // </div>
    }
}
 
export default NavBar;