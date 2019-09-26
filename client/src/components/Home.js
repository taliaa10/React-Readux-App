import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="gallery">
          <figure className="gallery__item">
            <img
              src="img/hotel-1.jpg"
              alt="hotel 1"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src="img/hotel-2.jpg"
              alt="hotel 2"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src="img/hotel-3.jpg"
              alt="hotel 3"
              className="gallery__photo"
            />
          </figure>
        </div>

        <div className="overview">
          <h1 className="overview__heading">Hotel Las Palmas</h1>
          <div className="overview__stars">
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="img/sprite.svg#icon-star"></use>
            </svg>
          </div>
          <div className="overview__location">
            <svg className="overview__icon-location">
              <use xlinkHref="img/sprite.svg#icon-location-pin"></use>
            </svg>
            <button className="btn-inline">Albufeira, Portugal</button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">429 votes</div>
          </div>
        </div>
        <div className="detail">
          <div className="description">
            <div className="desc">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">A/C & heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                  <img
                    src="img/user-3.jpg"
                    alt="friend 1"
                    className="recommend__photo"
                  />
                  <img
                    src="img/user-4.jpg"
                    alt="friend 2"
                    className="recommend__photo"
                  />
                  <img
                    src="img/user-5.jpg"
                    alt="friend 3"
                    className="recommend__photo"
                  />
                  <img
                    src="img/user-6.jpg"
                    alt="friend 4"
                    className="recommend__photo"
                  />
                </div>
              </div>
            </div>

            <div className="desc">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">A/C & heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                  <img
                    src="img/user-3.jpg"
                    alt="friend 1"
                    className="recommend__photo"
                  />
                  <img
                    src="img/user-4.jpg"
                    alt="friend 2"
                    className="recommend__photo"
                  />
                  <img
                    src="img/user-5.jpg"
                    alt="friend 3"
                    className="recommend__photo"
                  />
                  <img
                    src="img/user-6.jpg"
                    alt="friend 4"
                    className="recommend__photo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption className="review__user">
                <img className="review__photo" src="img/user-1.jpg" alt="" />
                <div className="review__user-box">
                  <p className="review__user-name">Nick Smith</p>
                  <p className="review__user-date">Feb 23rd, 2019</p>
                </div>
                <div className="review__rating">7.8</div>
              </figcaption>
            </figure>
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </blockquote>
              <figcaption className="review__user">
                <img className="review__photo" src="img/user-2.jpg" alt="" />
                <div className="review__user-box">
                  <p className="review__user-name">Mary Thomas</p>
                  <p className="review__user-date">Sept 13th, 2019</p>
                </div>
                <div className="review__rating">9.3</div>
              </figcaption>
            </figure>

            <button className="btn-inline">
              Show all <span>&rarr;</span>
            </button>
          </div>
        </div>
        <div className="cta">
          <h2 className="cta__book-now">
            Good news! We have 4 free rooms for your selected dates!
          </h2>
          <button className="btn">
            <span className="btn__visible">Book now</span>
            <span className="btn__invisible">Only 4 rooms left!</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
