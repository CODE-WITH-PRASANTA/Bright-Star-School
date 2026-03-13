import React from "react";
import "./RecentNews.css";
import { FaCalendarAlt } from "react-icons/fa";

import news1 from "../../assets/Grp-1.webp";
import news2 from "../../assets/Grp-2.webp";
import news3 from "../../assets/Grp-3.webp";

const RecentNews = () => {

  const newsData = [
    {
      img: news1,
      date: "9. August 2023",
      title: "A very warm welcome to our new Treasurer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
      img: news2,
      date: "9. August 2023",
      title: "Easy steps for choosing to the cearnin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
      img: news3,
      date: "9. August 2023",
      title: "You should know education always best",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    }
  ];

  return (
    <section className="recentnews-section">

      <div className="recentnews-header">

        <h2 className="recentnews-title">Recent News</h2>

        <p className="recentnews-subtitle">
          We are constantly expanding the range of services offered
        </p>

      </div>


      <div className="recentnews-container">

        {newsData.map((item, index) => (

          <div className="recentnews-card" key={index}>

            <div className="recentnews-image-wrapper">
              <img src={item.img} alt="news"/>
            </div>

            <div className="recentnews-content">

              <div className="recentnews-date">
                <FaCalendarAlt/>
                <span>{item.date}</span>
              </div>

              <h3 className="recentnews-heading">
                {item.title}
              </h3>

              <p className="recentnews-desc">
                {item.desc}
              </p>

            </div>

            <div className="recentnews-readmore">
              Read More →
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecentNews;