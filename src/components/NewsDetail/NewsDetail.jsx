import React from 'react';
import './NewsDetail.css'

export default function NewsDetail(props) {
  const news = props.news;
  return (
    <div className="JustifyCenter">
      <div className="card mb-3 col-md-4">
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
    </div>
  )
}

