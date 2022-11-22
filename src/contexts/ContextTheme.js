import React , {Component , createContext} from 'react';

export const ThemeContext = createContext();

class ContextTheme extends Component {
    state = {
        isLightTheme : true,
        dark : {syntax : '#555' , ui: '#FF5733' , bg: '#eee'},
        light : {syntax : '#ddd' , ui: '#FF5733' , bg: '#555'}

    }

    render() { 
        return <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
           

        </ThemeContext.Provider>;
    }
}
 
export default ContextTheme;