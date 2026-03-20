import React from "react";
import "./Search.css";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaPlay,
} from "react-icons/fa";

import news1 from "../../assets/Details1.webp";
import news2 from "../../assets/Details2.webp";
import news3 from "../../assets/Details3.webp";
import news4 from "../../assets/Details4.webp";

import gallery1 from "../../assets/Details1.webp";
import gallery2 from "../../assets/Details2.webp";
import gallery3 from "../../assets/Details3.webp";
import gallery4 from "../../assets/Details4.webp";
import gallery5 from "../../assets/Details1.webp";
import gallery6 from "../../assets/Details2.webp";

import videoThumb from "../../assets/c2.webp";

const Search = () => {
  const base = "schoolSidebar";

  const latestNews = [
    {
      id: 1,
      image: news1,
      date: "26 September 2023",
      title: "How to Keep Children Safe Online In",
    },
    {
      id: 2,
      image: news2,
      date: "09 August 2023",
      title: "Baby school and other secrets is yourfamily",
    },
    {
      id: 3,
      image: news3,
      date: "09 August 2023",
      title: "Easy steps for choosing to the cearnin",
    },
    {
      id: 4,
      image: news4,
      date: "09 August 2023",
      title: "You should know education always best",
    },
  ];

  const categories = [
    "AFTER SCHOOL",
    "Allgemein",
    "KINDERGARTEN",
    "PRE-K PROGRAM",
    "PRESCHOOL",
    "TODDLER",
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  const events = [
    { id: 1, month: "AUG", day: "22", title: "Lets Meet the Child Parents" },
    { id: 2, month: "AUG", day: "25", title: "Students Gaining Knowledge" },
    { id: 3, month: "AUG", day: "23", title: "Certified Institute Meetup" },
    { id: 4, month: "AUG", day: "22", title: "Father’s Day Sundaes & Shaving!" },
  ];

  return (
    <aside className={base}>
      <div className={`${base}__wrap`}>
        <section className={`${base}__card ${base}__searchCard`}>
          <h2 className={`${base}__title`}>Search</h2>
          <span className={`${base}__line`}></span>

          <form className={`${base}__searchForm`}>
            <input type="text" placeholder="" />
            <button type="submit">Search</button>
          </form>
        </section>

        <section className={`${base}__card`}>
          <h2 className={`${base}__title`}>Latest News</h2>
          <span className={`${base}__line`}></span>

          <div className={`${base}__newsList`}>
            {latestNews.map((item) => (
              <article className={`${base}__newsItem`} key={item.id}>
                <div className={`${base}__newsThumb`}>
                  <img src={item.image} alt={item.title} />
                </div>

                <div className={`${base}__newsContent`}>
                  <p className={`${base}__date`}>
                    <FaCalendarAlt />
                    {item.date}
                  </p>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${base}__card`}>
          <h2 className={`${base}__title`}>Categories</h2>
          <span className={`${base}__line`}></span>

          <div className={`${base}__categoryList`}>
            {categories.map((item, index) => (
              <button className={`${base}__categoryBtn`} key={index} type="button">
                <span className={`${base}__categoryIcon`}>
                  <FaArrowRight />
                </span>
                <span>{item}</span>
              </button>
            ))}
          </div>
        </section>

        <section className={`${base}__card`}>
          <h2 className={`${base}__title`}>Photos Gallery</h2>
          <span className={`${base}__line`}></span>

          <div className={`${base}__galleryGrid`}>
            {galleryImages.map((img, index) => (
              <div className={`${base}__galleryItem`} key={index}>
                <img src={img} alt={`gallery-${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className={`${base}__card`}>
          <h2 className={`${base}__title`}>Upcoming Events</h2>
          <span className={`${base}__line`}></span>

          <div className={`${base}__eventList`}>
            {events.map((item) => (
              <article className={`${base}__eventItem`} key={item.id}>
                <div className={`${base}__eventDate`}>
                  <span>{item.month}</span>
                  <strong>{item.day}</strong>
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className={`${base}__card`}>
          <h2 className={`${base}__title`}>Video</h2>
          <span className={`${base}__line`}></span>

          <div className={`${base}__videoBox`}>
            <div className={`${base}__videoThumb`}>
              <img src={videoThumb} alt="Video Thumbnail" />
              <button type="button" className={`${base}__playBtn`}>
                <FaPlay />
              </button>
            </div>

            <h3 className={`${base}__videoTitle`}>
              A very warm welcome to our new Treasurer
            </h3>
          </div>
        </section>

        <section className={`${base}__ctaCard`}>
          <h2>Join together to make amazing things happen</h2>
          <p>
            Get all the latest information, support and guidance about the cost of
            living with kindergarten.
          </p>

          <button type="button" className={`${base}__ctaBtn`}>
            Start Registration
          </button>

          <div className={`${base}__ctaShape ${base}__ctaShape--rocket`}>🚀</div>
          <div className={`${base}__ctaShape ${base}__ctaShape--star`}>✦</div>
          <div className={`${base}__ctaShape ${base}__ctaShape--smile`}>☺</div>
        </section>
      </div>
    </aside>
  );
};

export default Search;