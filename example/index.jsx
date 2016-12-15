import Reactive, { ReusableComponent } from '../src';

// Reusable Component Converted from JSX to JS Syntax
var MyComponent = Reactive.createComponent({
    displayName: "MyComponent",
    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello World"
        );
    }
})

// My App
class App extends React.Component {
	render(){
		return(
			<div>
				<ReusableComponent component={MyComponent} />
			</div>
		)
	}
}

React.render(<App />, document.body);