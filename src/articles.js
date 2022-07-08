import { useParams,Link } from 'react-router-dom';
import Card from './Cards';
import React, { useEffect, useState, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-python";
import './components/css/articles.css';
import './components/css/home.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Preloader from './preloader';
import $ from 'jquery';
import Cookie from 'js-cookie';




function Articles() {
  const { id } = useParams();
  const backtoTop = useRef(null);
  const [data, setdata] = useState([{}]);
  const [loaderstate, setLoaderstate] = useState(true);
  const executeScroll = () => {
    backtoTop.current.scrollIntoView({ behavior: "smooth" })
    setLoaderstate(true);
  }

  //const url = `http://localhost:5000/get/${id}`

  
  const subscribePopup=()=>{
    const emailcookie=Cookie.get("subEmail");

    if (typeof emailcookie==='undefined'){
      setTimeout(()=>{
        document.getElementById("sub-id").click();
      },30000)
    }
  }

  useEffect(() => {
    const url = `https://themuslimcoder-api.herokuapp.com/get/${id}`
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setdata(data);
        subscribePopup();
        document.title = data.title;
        setTimeout(() => {
          Prism.highlightAll();
          setLoaderstate(false);
        }, 1000)
        $('.loader-body').fadeToggle(1000)
      }
    )
  }, [id])


  return (
    <div>
      {
        loaderstate ? (
          <Preloader />
        ) : (
          null
        )
      }
      < Navbar />
      
      <div ref={backtoTop}>
        <div className="banner-img">
          <img alt={data.title} src={data.banner}></img>
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
                    <Link to={`/article/${article.id}/${article.title.replaceAll(" ", "-")}` } onClick={executeScroll} key={`link${i}}`}><Card title={article.title} description={""} banner={article.banner} date={article.date} topic={article.language} read={article.read_time} key={i} /></Link >
                  )

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