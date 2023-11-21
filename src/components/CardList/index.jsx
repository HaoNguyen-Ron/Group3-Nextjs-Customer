import x from "@/components/CardList/Card.module.css";
import Card from "./Card";
import Banner from "../Banner/Banner";

function CardList(props) {
  return (
 <div>
     <div className="container">
  <div className="row">
    <div className="col-md-6 col-sm-6 col-xs-12 ">
    <Banner
        image = "https://theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=316"
        caption ="Dòng chibi figure được yêu thích nhất,
                  nhiều gương mặt, thoả sức tạo dáng"
        title = "COMMING SOON" 
        name ="Nendoroid"
        
        />
    </div>
    <div className="col-md-6 col-sm-6 col-xs-12 ">
    <Banner
        image = "https://theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=316"
        caption ="Dòng scale figure kích thước sinh viên,
                     giá tiểu học"
        title = "COMMING SOON" 
        name ="Pop Up Parade"
          
        />
    </div>
   </div>
     </div>
       

      <div className={`${x["section"]}`}>
        <div className={`${x["section-heading"]}`}>
          <h2 className={`${x["hTitle"]}`}>
            <a href="">Sản Phẩm Order</a>
          </h2>
          <p>Những sản phẩm đã hoặc sắp phát hành & cần đặt trước</p>
        </div>
      </div>

 
      <div className=" container wrapper">
        <div className="d-flex row justify-content-around">
          <div className="col-12 col-md-12 col-lg-4">
            <div className={`${x["groupbanner-hover"]}`}>
              <img
                  className={`lazyloaded ls-is-cached ${x["images"]}`}
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=316"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-8">
              <div className="d-flex row">

                <div className="col-6 col-md-4 col-lg-3">
                 <Card
                   image = "https://product.hstatic.net/1000160337/product/heaven_official_s_blessing_nendoroid_doll_xie_lian__7__ce3dcd69bce34f59ac09775228a5873b_medium.jpg"
                   price="2,850,000₫"
                   name="Heaven Official's Blessing Nendoroid Doll Xie Lian"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>
              </div>
            </div>
          </div>
        </div>

     
      <div className={` ${x["section"]}`}>
        <div className={` ${x["section-heading"]}`}>
          <h2 className={` ${x["hTitle"]}`}>
            <a href="collections/scale-figure">Sản Phẩm Có Sẵn</a>
          </h2>
          <p>Sản phẩm đang có sẵn, bạn có thể mua ngay</p>
        </div>
      </div>

   
    
      <div className=" container wrapper">
        <div className="d-flex row flex-row-reverse justify-content-around">
          <div className="col-12 col-md-12 col-lg-4">
            <div className={`${x["groupbanner-hover"]}`}>
              <img
                className={`lazyloaded ls-is-cached ${x["images"]}`}
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=316"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            
              <div className="d-flex row">

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                <Card
                   image = "/assets/images/a2.png "
                   price="12345"
                   name="abc"
                 />
                </div>
              </div>
            </div>
          </div>
        </div>


      <div className={`${x["title"]}`}>
        <div className={`${x["groupbanner-hover"]}`}>
          <img
           className={`lazyloaded ls-is-cached ${x["images"]}`}
            src="//theme.hstatic.net/1000160337/1000885200/14/home_bannerfull.jpg?v=316"
            alt=""
          />
        </div>
      </div>
    
   </div>
  );
}

export default CardList;
