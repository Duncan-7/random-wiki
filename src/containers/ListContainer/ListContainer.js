import React, { Component } from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import classes from './ListContainer.module.css';

class ListContainer extends Component {
  state = {
    articles: null,
    error: false
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    axios.get('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=10&origin=*')
      .then(response => {
        const articles = response.data.query.random;
        this.setState({
          articles: articles
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      })
  }


  render() {
    let articleList = <Spinner />
    if (this.state.articles) {
      articleList = <ArticleList articles={this.state.articles} />
    };
    if (this.state.error) {
      articleList = <p>Error loading articles, please try again</p>
    }
    return (
      <div>
        <h2 className={classes.Centered}>Random Wiki Generator</h2>
        {articleList}
        <div className={classes.Centered}>
          <Button
            btnType="Neutral"
            onClick={this.loadArticles} >
            Reload Articles
        </Button>
        </div>
      </div>
    )
  }
}

export default ListContainer;