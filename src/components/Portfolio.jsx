import { Component } from 'react'
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import cards from './cards';
import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.cards = cards;
    this.state = {
      projects: cards,
      selected: 'All',
    };

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    let cards = this.cards;

    if (filter !== 'All') {
      cards = this.cards.filter(card => card.category === filter);
    } 

    this.setState({
      projects: cards,
      selected: filter,
    })
  }

  render() {
    const {selected, projects} = this.state;

    return (
      <div className='container'>
        <Toolbar
          filters={['All', 'Websites', 'Flayers', 'Business Cards']}
          selected={selected}
          onSelectFilter={this.onSelectFilter} />
        <ProjectList projects={projects}></ProjectList>
      </div>
    );
  }
}