import x from "@/components/CardList/Card.module.css";
import Card from "./Card";
import Banner from "../Banner/Banner";

function CardList(props) {
  return (
    <div>
      <div className="container d-flex justify-content-space-between">
        <Banner />
        <Banner />
      </div>

      <div className={x["section"]}>
        <div className={x["section-heading"]}>
          <h2 className={x["hTitle"]}>
            <a href="">Sản Phẩm Order</a>
          </h2>
          <p>Những sản phẩm đã hoặc sắp phát hành & cần đặt trước</p>
        </div>
      </div>

      <div className=" container wrapper">
        <div className="d-flex row justify-content-around">
          <div className="col-12 col-md-12 col-lg-4">
            <div className={x["groupbanner-hover"]}>
              <img
                className="lazyloaded ls-is-cached  "
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=316"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-8">
              <div className="d-flex row">
                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className={x["section"]}>
        <div className={x["section-heading"]}>
          <h2 className={x["hTitle"]}>
            <a href="collections/scale-figure">Sản Phẩm Có Sẵn</a>
          </h2>
          <p>Sản phẩm đang có sẵn, bạn có thể mua ngay</p>
        </div>
      </div>

      <div className=" container wrapper">
        <div className="d-flex row flex-row-reverse justify-content-around">
          <div className="col-12 col-md-12 col-lg-4">
            <div className={x["groupbanner-hover"]}>
              <img
                className="lazyloaded ls-is-cached  "
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=316"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-8">
              <div className="d-flex row">
                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Card />
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className={x["title"]}>
        <div className={x["groupbanner-hover"]}>
          <img
            className=" ls-is-cached lazyloaded"
            src="//theme.hstatic.net/1000160337/1000885200/14/home_bannerfull.jpg?v=316"
            alt=""
          />
        </div>
      </div>

<<<<<<< HEAD
     
      
    
=======
>>>>>>> 4216bd8480221df99d619da32c351b1359c4f7f0
      <style jsx>
        {`
          img {
            max-width: 100%;
            vertical-align: middle;
            border: 0;
            overflow-clip-margin: content-box;
            overflow: clip;
          }
        `}
      </style>
    </div>
  );
}

export default CardList;
