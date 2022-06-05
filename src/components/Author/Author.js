import React from 'react';

const Author = ({ articleLogo, articleName, articleDate, colorOfText }) => {
  return (
    <div className="article__author">
      <div>
        <img className="author__photo" src={articleLogo} alt="article-logo" />
        <span
          className="author__name"
          style={{ color: colorOfText ? '#999999' : 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}
        >
          {articleName}
        </span>
      </div>
      <span
        className="article__date"
        style={{ color: colorOfText ? '#999999' : 'rgba(255, 255, 255, 0.7)' }}
      >
        {articleDate}
      </span>
    </div>
  );
};
export default Author;
