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

  onChange = (newValue) => {
    this.setState({value: newValue});
  };

  onSearch = () => {
    this.props.searchCommits(this.state.value);
  };

  onCancelSearch = () => {
    this.setState({value: ''}, () => this.onSearch());
  };

  render() {
    return (
      <SearchBar
        className={b().toString()}
        value={this.state.value}
        onChange={this.onChange}
        onRequestSearch={this.onSearch }
        onCancelSearch={this.onCancelSearch}
      />
    );
  }


}

export default SearchInput;
