import React from 'react';
import ArticleLink from '../ArticleLink/ArticleLink';
import classes from './ArticleList.module.css';

const ArticleList = props => {
  const articleList = props.articles.map(article => {
    return <li key={article.id}>
      <ArticleLink
        id={article.id}
        title={article.title} />
    </li>;
  });
  return <ul className={classes.ArticleList}>
    {articleList}
  </ul>
}

export default ArticleList;