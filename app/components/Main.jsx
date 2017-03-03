import React from 'react';
import NavComponent from './NavComponent.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <NavComponent/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
};
