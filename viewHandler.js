import React from 'react';
import {connect} from 'react-redux';
class ViewHandler {
    constructor() {
        this.viewMap = new Map();
    }
    register(key, component) {
        this.viewMap.set(key, component);
    }
    unregister(key) {
        this.viewMap.delete(key);
    }
    getComponent(key) {
        if (this.viewMap.has(key)) return this.viewMap.get(key);
        else return function() {return null;} // an empty component to handle the case of the view not being registered.
    }
}

class stateView extends React.Component {
    render() {
        return React.createElement(viewHandler.getComponent(this.props.view));
    }
}

export default viewHandler = new ViewHandler();

export const StateView = connect(state => ({view: state.view}))(stateView);