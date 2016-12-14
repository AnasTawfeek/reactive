'use strict';

import React from 'react';
import Reactive from '../Reactive';

export default class ReusableComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ComponentClass = Reactive.saveComponent(this.props.component);
        return <ComponentClass />
    }
}