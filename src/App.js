import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then((resp) => resp.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBox placeholder="search monsters" handleOnChange={this.handleChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}
