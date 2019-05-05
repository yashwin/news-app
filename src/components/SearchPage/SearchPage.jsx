import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
  NewsList as searchNewsLists, 
  KeywordList as getKeywordList 
} from "../../redux/actions";
import './SearchPage.css'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }    

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleClick(keyword, event) {
    event.preventDefault();
    this.props.searchNewsLists(keyword, 1);
  }

  componentDidMount() {
    this.props.getKeywordList();
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
    const { isSearchingNews, keywords, allNews } = this.props;
    return (
      <div>
        <div className="text-center mt-3">
          <form onSubmit={this.handleSearch}>
            <label>
              Enter Search Text &nbsp;
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="ml-1 btn btn-primary" type="submit" value="Search" disabled={isSearchingNews} />
            {allNews.length === 0 &&
              <div>
                {
                  !isSearchingNews &&
                  <div>
                    {
                      this.state.value.length === 0 &&
                      <div className="ErrorMessage mt-1">
                        You must enter a search text!!
              </div>
                    }
                  </div>
                }
              </div>
            }
          </form>
        </div>
        {allNews.length === 0 &&
          <div>
            <div className="mt-3">Suggestions: </div>
            <div className="mt-2">
              {
                keywords.map((keyword) => (
                  <div className="Tags" key={keyword.id} onClick={this.handleClick.bind(this, keyword.webTitle)}>
                    {keyword.webTitle}
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSearchingNews: state.news.isSearchingNews,
  allNews: state.news.allNews,
  searchTerm: state.news.searchTerm,
  keywords: state.keywords.allKeywords
})

const mapDispatchToProps = {
  searchNewsLists,
  getKeywordList
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

