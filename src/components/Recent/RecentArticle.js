import React from 'react';
import img1 from '../../img/recent1.png';
import Author from '../Author/Author';
import articleLogo from '../../img/article-logo.png';
import './RecentArticle.css';

const RecentArticle = ({ img, articleTitle, articleSubtitle }) => {
  return (
    <article className="recent__article">
      <img className="recent-photo" src={img} alt="recent-photo1" />
      <div className="recent-article__inner">
        <h3 className="recent__article-title">{articleTitle}</h3>
        <p className="recent__article-subtitle"> {articleSubtitle} </p>
        <Author
          articleLogo={articleLogo}
          articleName="William Wong"
          articleDate="9/25/2015"
          colorOfText={true}
        />
      </div>
    </article>
  );
};

export default React.memo(RecentArticle);
