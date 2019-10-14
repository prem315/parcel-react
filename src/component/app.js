import React from 'react';

class App extends React.Component {
	state = { count: 0 };

	increment = () => {
		console.log('clciked');
		this.setState({
			count: this.state.count + 1
		});
	};
	render() {
		return (
			<div>
				APP {this.state.count}
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default App;
