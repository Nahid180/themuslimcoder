import { useParams, Link } from 'react-router-dom';
import Card from './Cards';
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-python";
import "prismjs/plugins/show-language/prism-show-language.min.js"
import './components/css/articles.css';
import './components/css/home.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Preloader from './preloader';
import $ from 'jquery';



function Articles() {
  const { id } = useParams();
  const [data, setdata] = useState([{}]);
  const [loaderstate, setLoaderstate] = useState(true);
  const url = `https://articlesaboutcoding-end.herokuapp.com/get/${id}`
  //const url = `http://localhost:5000/get/${id}`

  useEffect(() => {
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setdata(data);
        document.title = data.title;
        setTimeout(() => {
          Prism.highlightAll();
          setLoaderstate(false);
        }, 1000)
        $('.loader-body').fadeToggle(1000)
      }
    )
  }, [])


  return (
    <div>
      {
        loaderstate ? (
          <Preloader />
        ) : (
          null
        )
      }
      <Navbar />
      <div>
        <div className="banner-img">
          <img src={data.banner}></img>
        </div>
        <div className="article-container">
          <div className="article-body">
            <h1>{data.title}</h1>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
        </div>
        <h1 id="recent-articles" className='post-title'>Explore More</h1>
        <div className="body-card-main">
          <div className="card-container">
            {
              (typeof data.more_section === "undefined") ? (
                <p>Loading...</p>
              ) : (
                data.more_section.map((article, i) => {
                  return (
                    <Link to={`/article/${article.id}/${article.title.replaceAll(" ", "-")}`}><Card title={article.title} description={""} banner={article.banner} date={article.date} topic={article.language} read={article.read_time} key={i} /></Link>
                  )
                  //console.log(article)
                })
              )
            }

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Articles;