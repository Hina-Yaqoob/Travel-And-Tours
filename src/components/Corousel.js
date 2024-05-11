import "./corouselStyle.css";
import { useEffect, useState } from "react";

function Corousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
     let timeOut =
      autoPlay &&
      setTimeout(() => {
        slideright();
      }, 2500);
  });

  const slideleft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  const slideright = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div className="firstcorousel">
        <div className="basictext">
          <h1>International Tour</h1>
          <h1> Management.</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,<br></br> there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the{" "}
            <br></br>Semantics, a large language ocean.
          </p>
        </div>
      </div>
      <div
        className="imgcorousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="corousel_wrapper">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "ccorousel_card  ccorousel_card-active  "
                    : "ccorousel_card"
                }
              >
                <img className="card_img" src={image.image} alt="" />
              </div>
            );
          })}
          <div className="corousel_arrow_left" onClick={slideleft}>
            &lt;
          </div>
          <div className="corousel_arrow_right" onClick={slideright}>
            &gt;
          </div>

          <div className="corousel_pagination">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? "pagination_dot  pagination_dot-active  "
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Corousel;
