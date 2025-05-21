import { FaSearch } from "react-icons/fa";
import "./Viewer.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "swiper/css";
import "swiper/css/pagination";
import { FaBookOpen, FaTextHeight } from "react-icons/fa6";
// import required modules
import { Pagination, FreeMode } from "swiper/modules";
import { useState } from "react";

const Viewer = () => {
  const [toggleView, setToggleView] = useState("page");
  return (
    <div className="viewer">
      <div className="viewer-nav">
        <div className="nav-left">
          <GiHamburgerMenu />
        </div>
        <div className="nav-center">
          {" "}
          <img src="/gabfiresLogo.png" className="viewer-nav-logo" />
          <div className="viewer-nav-logo-text">Gabfire ePaper</div>
          <hr />
          {/* IssuesModal */}
          <span className="viewer-nav-issue">21 May 2025</span>
        </div>
        <div className="nav-right">
          <div className="avatar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="avatar"
            />
          </div>
          <Link to="/signup">Sign up</Link>
          <div className="search-box">
            <FaSearch />
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="view">
        <div className="branding">
          Gabfire ePaper <br /> <span>Welcome to City Times ePaper</span>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide className="slide single">
            <TransformWrapper>
              <TransformComponent>
                <img className="img" src="/0.jpg" alt="778" />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <TransformWrapper>
              <TransformComponent>
                <img className="img" src="/1.jpg" alt="778" />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <TransformWrapper>
              <TransformComponent>
                <img className="img" src="/2.jpg" alt="" />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <TransformWrapper>
              <TransformComponent>
                <img className="img" src="/2.jpg" alt="" />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <TransformWrapper>
              <TransformComponent>
                <img className="img" src="/2.jpg" alt="" />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide single">
            <TransformWrapper>
              <TransformComponent>
                <img className="img" src="/0.jpg" alt="778" />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>{" "}
        </Swiper>
      </div>

      <div className="lower-nav">
        <div className="view-changer">
          <div className="toggle">
            <div
              className={toggleView === "page" ? "icon active" : "icon"}
              onClick={() => setToggleView("page")}
            >
              <FaBookOpen />
            </div>
            <div
              className={toggleView === "text" ? "icon active" : "icon"}
              onClick={() => setToggleView("text")}
            >
              <FaTextHeight />
            </div>
          </div>
        </div>

        <div className="pages">
          <div className="page">1 Front Page</div>
          <div className="page active">2 stars</div>
          <div className="page">3 Uae Cover</div>
          <div className="page">4 Cover</div>
          <div className="page">5 stars</div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
