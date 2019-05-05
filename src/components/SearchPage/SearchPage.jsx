import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchNewsLists } from "../../redux/actions";
import './SearchPage.css'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }    

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  componentWillReceiveProps() {
    this.setState((state, props) => ({
      value: props.searchTerm
    }));
  }

  handleSearch(event) {
    event.preventDefault();
    const searchTerm = this.state.value;
    if(searchTerm) {
      this.props.searchNewsLists(this.state.value, 1);
    } 
  }

  render() {
    const { isSearchingNews } = this.props;
    return (
      <div className="text-center mt-3">
        <form onSubmit={this.handleSearch}>
          <label>
            Enter Search Text &nbsp;
          <input type="text" value={this.state.value} onChange={this.handleChange}  />
          </label>
          <input className="ml-1 btn btn-primary" type="submit" value="Search" disabled={isSearchingNews} />
          {
            this.state.value.length === 0  &&
            <div className="ErrorMessage mt-1">
              You must enter a search text!!
            </div>
          }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSearchingNews: state.news.isSearchingNews,
  searchTerm: state.news.searchTerm
})

const mapDispatchToProps = {
  searchNewsLists
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

