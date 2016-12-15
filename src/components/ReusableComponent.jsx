'use strict';

import React from 'react';
import Reactive from '../Reactive';

export default class ReusableComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ComponentClass = Reactive.loadComponent(this.props.component);
        return <ComponentClass />
    }
}