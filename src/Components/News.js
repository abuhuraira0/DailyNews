import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import logo from "./logo.jpg";

export class News extends Component {
  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 5,
  //   category: 'general'
  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }
  // scrollToTop = () =>{
  //   window.scrollTo({
  //     top: 0, 
  //     behavior: 'smooth'
  //   });
  // };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d2f97c55df14096b5ff64b4e6eead4d&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }
  handleNextClick = async ()=>{
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d2f97c55df14096b5ff64b4e6eead4d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    } 
  handlePrevClick = async ()=>{
    console.log("Previous");
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d2f97c55df14096b5ff64b4e6eead4d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="alert alert-primary text-center" style={{color:"#de1259",marginTop:'90px'}}>{this.capitalizeFirstLetter(this.props.category)} - Top Headlines</h2>
        <div className="container d-flex justify-content-between">
        <button onClick={this.handlePrevClick} disabled={this.state.page <= 1} type="button" className="btn btn-dark">&laquo; Previous</button>
        <button onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark">Next &raquo;</button>
        </div>
       {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 80):""}
                  imgUrl={element.urlToImage?element.urlToImage:logo}
                  newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button onClick={this.handlePrevClick} disabled={this.state.page <= 1} type="button" className="btn btn-dark">&laquo; Previous</button>
        <button onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark">Next &raquo;</button>
        </div>
      </div>

    )
  }
}

export default News;
