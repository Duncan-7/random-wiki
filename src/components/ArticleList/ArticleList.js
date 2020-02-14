import React from 'react';
import ArticleLink from '../ArticleLink/ArticleLink';

const ArticleList = props => {
  const articleList = props.articles.map(article => {
    return <ArticleLink
      key={article.id}
      id={article.id}
      title={article.title} />;
  });
  return <ul>
    {articleList}
  </ul>
}

export default ArticleList;