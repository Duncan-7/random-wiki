import React from 'react';
import classes from './Article.module.css';

const Article = props => {
  const articleUrl = "https://en.wikipedia.org/?curid=" + props.match.params.id;
  let article = <iframe src={articleUrl} className={classes.Frame}></iframe>
  return <div className={classes.FrameContainer}>
    {article}
  </div>
}

export default Article;