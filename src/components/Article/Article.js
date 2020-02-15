import React from 'react';
import classes from './Article.module.css';

const Article = props => {
  let articleUrl = "https://en.wikipedia.org/?curid=" + props.match.params.id;
  const isMobile = window.innerWidth < 500;
  if (isMobile) {
    articleUrl = "https://en.m.wikipedia.org/?curid=" + props.match.params.id;
  }
  let article = <iframe src={articleUrl} className={classes.Frame} title="Wiki page"></iframe>
  return <div>
    {article}
  </div>
}

export default Article;