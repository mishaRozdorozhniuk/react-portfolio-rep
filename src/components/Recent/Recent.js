import React from 'react';
import RecentArticle from './RecentArticle';
import './Recent.css';
import recent1 from '../../img/recent1.png';
import recent2 from '../../img/recent2.png';
import recent3 from '../../img/recent3.png';
import recent4 from '../../img/recent4.png';
import recent5 from '../../img/recent5.png';
import recent6 from '../../img/recent6.png';
import SectionTitle from '../SectionTitle/SectionTitle';

const Recent = () => {
  return (
    <section className="recent">
      <div className="container">
        <SectionTitle text="Most Recent" />
        <div className="recent__inner">
          <RecentArticle
            img={recent1}
            articleTitle="Still Standing Tall"
            articleSubtitle="Life begins at the end of your comfort zone."
          />
          <RecentArticle
            img={recent2}
            articleTitle="Sunny Side Up"
            articleSubtitle="No place is ever as bad as they tell you it’s going to be."
          />
          <RecentArticle
            img={recent3}
            articleTitle="Water Falls"
            articleSubtitle="We travel not to escape life, but for life not to escape us."
          />
          <RecentArticle
            img={recent4}
            articleTitle="Through the Mist"
            articleSubtitle="Travel makes you see what a tiny place you occupy in the world."
          />
          <RecentArticle
            img={recent5}
            articleTitle="Awaken Early"
            articleSubtitle="Not all those who wander are lost."
          />
          <RecentArticle
            img={recent6}
            articleTitle="Try it Always"
            articleSubtitle="The world is a book, and those who do not travel read only one page."
          />
        </div>
      </div>
    </section>
  );
};

export default Recent;
