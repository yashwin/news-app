import React from 'react';
import './NewsDetail.css';

export default function NewsDetail(props) {
  const news = props.news;
  return (
    <div class="col-md-5 MarginAuto">
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
                    <div className="Tags" key={keyword.id}>
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
  )
}

