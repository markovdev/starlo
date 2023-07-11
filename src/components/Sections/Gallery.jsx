import React from "react";
import Reveal from "../../Animations/Reveal";
import photo1 from "../../assets/img/gallery-1.jpg";
import photo2 from "../../assets/img/gallery-2.jpg";
import photo3 from "../../assets/img/gallery-3.jpg";
import photo4 from "../../assets/img/gallery-4.jpg";
import photo5 from "../../assets/img/gallery-5.jpg";
import photo6 from "../../assets/img/gallery-6.jpg";
import photo7 from "../../assets/img/gallery-7.jpg";
import photo8 from "../../assets/img/gallery-8.jpg";
import photo9 from "../../assets/img/gallery-9.jpg";
import photo10 from "../../assets/img/gallery-10.jpg";
import photo11 from "../../assets/img/gallery-11.jpg";
import photo12 from "../../assets/img/gallery-12.jpg";
import photo13 from "../../assets/img/gallery-13.jpg";
import photo14 from "../../assets/img/gallery-14.jpg";
const Gallery = () => {
  return (
    <Reveal>
      {" "}
      <section className="section section--gallery">
        <figure className="gallery__item--1">
          <img className="gallery__img" src={photo1} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--2">
          <img className="gallery__img" src={photo2} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--3">
          <img className="gallery__img" src={photo3} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--4">
          <img className="gallery__img" src={photo4} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--5">
          <img className="gallery__img" src={photo5} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--6">
          <img className="gallery__img" src={photo6} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--7">
          <img className="gallery__img" src={photo7} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--8">
          <img className="gallery__img" src={photo8} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--9">
          <img className="gallery__img" src={photo9} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--10">
          <img className="gallery__img" src={photo10} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--11">
          <img className="gallery__img" src={photo11} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--12">
          <img className="gallery__img" src={photo12} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--13">
          <img className="gallery__img" src={photo13} alt="Gallery photo" />
        </figure>
        <figure className="gallery__item--14">
          <img className="gallery__img" src={photo14} alt="Gallery photo" />
        </figure>
      </section>
    </Reveal>
  );
};

export default Gallery;
