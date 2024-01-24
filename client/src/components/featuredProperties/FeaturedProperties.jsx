import './featuredProperties.scss'

export default function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}