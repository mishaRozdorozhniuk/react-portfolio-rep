import React from 'react';
import img1 from '../../img/featured1.png';
import img2 from '../../img/featured2.png';
import articleLogo from '../../img/article-logo.png';
import articleLogo2 from '../../img/article-logo2.png';
import FeaturedArticle from './FeaturedArticle';
import './Featured.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container-featured">
        <SectionTitle text="Featured Posts" />
        <div className="featured__inner">
          <FeaturedArticle
            title="The Road Ahead"
            articlePhoto={img1}
            subtitle="The road ahead might be paved - it might not be."
            articleLogo={articleLogo}
            articleName="Mat Vogels"
            articleDate="September 25, 2015"
          />

          <FeaturedArticle
            title="The Road Ahead"
            articlePhoto={img2}
            subtitle="The road ahead might be paved - it might not be."
            articleLogo={articleLogo2}
            articleName="Mat Vogels"
            articleDate="September 25, 2015"
          />
        </div>{' '}
      </div>{' '}
    </section>
  );
};

export default Featured;
