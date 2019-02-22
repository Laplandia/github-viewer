import React from 'react';
import {object} from 'prop-types';
import bemCl from 'bem-cl';
import './SearchInput.css';
import { func, string } from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


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

  onChange = newValue => {
    this.setState({ value: newValue });
  };

  onSearch = () => {
    this.props.searchCommits(this.state.value);
  };

  onCancelSearch = () => {
    this.setState({ value: '' }, () => this.onSearch());
  };

  static childContextTypes = {
    muiTheme: object,
  };

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div className={b('container')}>
        <SearchBar
          className={b().toString()}
          value={this.state.value}
          onChange={this.onChange}
          onRequestSearch={this.onSearch}
          onCancelSearch={this.onCancelSearch}
        />
      </div>
    );
  }
}

export default SearchInput;
