import React from 'react';
import bemCl from 'bem-cl';
import './SearchInput.css';
import { func, string } from 'prop-types';
import SearchBar from 'material-ui-search-bar';

const b = bemCl('gv-search-input');

class SearchInput extends React.PureComponent {
  static propTypes = { searchCommits: func.isRequired, initialValue: string };

  static defaultProps = {
    initialValue: ''
  };

  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
  }

  render() {
    const { searchCommits } = this.props;
    return (
      <SearchBar
        className={b().toString()}
        value={this.state.value}
        onChange={newValue => this.setState({ value: newValue })}
        onRequestSearch={() => searchCommits(this.state.value)}
      />
    );
  }
}

export default SearchInput;
