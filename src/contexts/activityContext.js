// Importing the createContext fxn is what creates the context for you to use.
import React, { createContext, Component } from 'react';

//Exporting the context that is stored inside of the ActivityContext constant(const).
export const ActivityContext = createContext();

//Class component that will share the data that you want to share (through the Provider) with other components.
export default class ActivityContextProvider extends Component {
    state = {
        activity : '',
        handleClick: this.handleClick
    }

    handleClick = e => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    render() {
        return (
            //Next Line: Value property refers to the data that you want to pass to the children this component will wrap, in this case it will be the properties for the state.
            <ActivityContext.Provider value={{...this.state}}>
                {/* Next Line: Refers to the children that the 'ActivityContextProvider' component wraps around in the App.js file. */}
                {this.props.children}
            </ActivityContext.Provider>
        )
    }
}
