import Navbar from "./navbar";
import Card from './Cards';
import Footer from "./footer";
import Preloader from "./preloader";
import './components/css/home.css'
import './components/css/subscribe.css'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import $ from 'jquery';


function Home() {
  const recent_post = useRef(null);
  const executeScroll = () => recent_post.current.scrollIntoView({ behavior: "smooth" })
  const [loaderstate, setLoaderstate] = useState(true);
  const [data, setdata] = useState([{}]);
  //const url="http://127.0.0.1:5000/get_all"
  const url = "https://themuslimcoder-api.herokuapp.com/get_all"
  useEffect(() => {
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setdata(data);
        $('.loader-body').fadeToggle(1000)
        setTimeout(() => {
          setLoaderstate(false);
          document.title = "Home | The Muslim Coder";
        }, 1000);

      }
    )
  }, [])

  return (
    <div >
      <div>
        {
          loaderstate ? (
            <Preloader />
          ) : (
            null
          )
        }
        <Navbar />
        <div className="image-container">
          <div className="image-text-box">
            <p>Welcome To The</p>
            <h1>The Muslim Coder</h1>
            <h3>Love Coding and Explore Coding!</h3>
            <Link to='/about'>Explore Articles</Link>
            <Link to='/contact/123344'>Connect With Me <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
          <div className="down-arrow">
            <img onClick={executeScroll} src="https://codebasics.io/assets/images/down.png" alt="Down arrow" />
          </div>

        </div>

        <div className="mob-textbox">
          <h2>Welcome To The</h2>
          <h1>Articles About Coding</h1>
          <p>Do you love to write and explore code? You are in the write place! Explore articles about programming and computer science. Subscribe to my newsletter to get newly published articles staright to you inbox! Happy Coding!</p>
          <Link to='/about'>Explore Articles</Link>
          <Link to='' onClick={() => (document.getElementById('sub-id').click())}>Subscribe <i className="fa-solid fa-arrow-right-long"></i></Link>
        </div></div>
      <h1 ref={recent_post} id="recent-articles" className='post-title'>Recent Articles</h1>
      <div className="body-card-main">
        <div className="card-container">
          {
            (typeof data.recent_articles === 'undefined') ? (
              <p>Loading....</p>
            ) : (
              data.recent_articles.map((article, i) => {
                return (
                  <Link to={`/article/${article.id}/${article.title.replaceAll(" ", "-")}`}><Card title={article.title} description={article.description} banner={article.banner} date={article.date} topic={article.language} read={article.read_time} key={i} /></Link>
                )
              })
            )
          }

        </div>
      </div>
      <h1 className='post-title'>Top Articles</h1>
      <div className="body-card-main">
        <div className="card-container">
          {
            (typeof data.recent_articles === 'undefined') ? (
              <p>Loading....</p>
            ) : (
              data.recent_articles.map((article, i) => {
                return (
                  <Link to={`/article/${article.id}/${article.title.replaceAll(" ", "-")}`}><Card title={article.title} description={article.description} banner={article.banner} date={article.date} topic={article.language} read={article.read_time} key={i} /></Link>
                )
              })
            )
          }
        </div>
      </div>
      <h1 className='post-title'>More Articles</h1>
      <div className="body-card-main">
        <div className="card-container">
          {
            (typeof data.recent_articles === 'undefined') ? (
              <p>Loading....</p>
            ) : (
              data.recent_articles.map((article, i) => {
                return (
                  <Link to={`/article/${article.id}/${article.title.replaceAll(" ", "-")}`}><Card title={article.title} description={article.description} banner={article.banner} date={article.date} topic={article.language} read={article.read_time} key={i} /></Link>
                )
              })
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;