import React from 'react';
import Author from '../Author/Author';

const FeaturedArticle = ({
  title,
  articlePhoto,
  subtitle,
  articleLogo,
  articleName,
  articleDate,
}) => {
  return (
    <article>
      <img className="article__foto" src={articlePhoto} alt="featured-photo1" />
      <div className="article__content">
        <h3 className="article__title"> {title} </h3>{' '}
        <p className="article__subtitle"> {subtitle} </p>{' '}
        <Author articleLogo={articleLogo} articleName={articleName} articleDate={articleDate} />{' '}
      </div>{' '}
    </article>
  );
};

export default FeaturedArticle;
