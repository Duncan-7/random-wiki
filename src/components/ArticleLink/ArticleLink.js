import React from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = props => {
  return <Link to={"/articles/" + props.id}>
    <li>{props.title}</li>
  </Link>
}

export default ArticleLink;