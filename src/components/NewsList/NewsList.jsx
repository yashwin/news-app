import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import { searchNewsLists } from "../../redux/actions";
import NewsDetail from "../NewsDetail/NewsDetail"
import './NewsList.css'

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.handlePagination = this.handlePagination.bind(this);
  }

  handlePagination(page) {
    this.props.searchNewsLists(this.props.searchTerm, page);
  }

  render() {
    const { allNews, totalItems, searchTerm, currentPage } = this.props;
    return (
      <div className="mt-3">
        {searchTerm &&
          <div>
            <h4>
              Showing results for {searchTerm}
            </h4>
            <div>
              {
                allNews.length > 0 ? (
                  allNews.map((news) => (
                    <NewsDetail news={news} key={news.id} />
                  ))
                ) : (
                    <h6 className="mt-4">No results found, please try something else </h6>
                )
              }
            </div>
            <div className="JustifyCenter">
              {totalItems > 10 &&
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={10}
                  totalItemsCount={totalItems}
                  pageRangeDisplayed={10}
                  prevPageText="Previous"
                  firstPageText="First"
                  lastPageText="Last"
                  nextPageText="Next"
                  activeLinkClass="ActivePageLink"
                  itemClass="PageButtons"
                  linkClass="PageButton"
                  disabledClass="PageButtonDisabled"
                  onChange={this.handlePagination}
                />
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allNews: state.news.allNews,
  totalItems: state.news.totalItems,
  currentPage: state.news.currentPage,
  searchTerm: state.news.searchTerm
})

const mapDispatchToProps = {
  searchNewsLists
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);