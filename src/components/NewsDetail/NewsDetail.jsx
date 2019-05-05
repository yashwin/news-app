import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NewsList as searchNewsLists } from "../../redux/actions";
import './NewsDetail.css';

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(keyword, event) {
    event.preventDefault();
    this.props.searchNewsLists(keyword, 1);
  }

  render() {
    const news = this.props.news;
    return (
      <div className="col-md-5 MarginAuto">
        <a href={news.url} target='_blank' rel="noopener noreferrer" className="JustifyCenter CardLink">
          <div className="card mb-3 Card">
            <div className="row no-gutters">
              <div className="col-md-4 MarginAuto">
                <img src={news.thumbnail} className="card-img" alt={news.headline} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{news.headline}</h6>
                  {
                    news.keywords.map((keyword) => (
                      <div className="Tags" key={keyword.id} onClick={this.handleClick.bind(this, keyword.webTitle)}>
                        {keyword.webTitle}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchNewsLists
};

export default connect(null, mapDispatchToProps)(NewsDetail);
