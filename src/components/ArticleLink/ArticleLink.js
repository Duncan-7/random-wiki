import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ArticleLink.module.css';


const ArticleLink = props => {
  return <Link className={classes.ArticleLink} to={"/articles/" + props.id} target="_blank" >
    {props.title}
  </Link>
}

export default ArticleLink;