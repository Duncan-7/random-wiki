import React, { Component } from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';

class ListContainer extends Component {
  state = {
    articles: null
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    axios.get('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=10')
      .then(response => {
        const articles = response.data.query.random;
        this.setState({
          articles: articles
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    let articleList = <Spinner />
    if (this.state.articles) {
      articleList = <ArticleList articles={this.state.articles} />
    }
    return (
      <div>
        {articleList}
        <Button
          btnType="Neutral"
          onClick={this.loadArticles} >
          Reload Articles
        </Button>
      </div>
    )
  }
}

export default ListContainer;