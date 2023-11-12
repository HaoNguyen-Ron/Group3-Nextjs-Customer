import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import x from '@/components/Slider/Slider.module.css'

function Sliders() {
  const settings = {
    infinite: true,
    speed: 5,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      
      <div className={` ${x["section"]}`}>
        <div className={` ${x["section-heading"]}`}>
          <h2 className={` ${x["hTitle"]}`}>
            <a href="collections/scale-figure">Dành Cho Người Mới Bắt Đầu</a>
          </h2>
          <p>Hướng dẫn cơ bản</p>
        </div>
      </div>
      <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <div className={x["groupbanner-hover"]}>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <h5 className={`${x["custom"]}`}>{d.name}</h5>
              <p className={`${x["overflow-ellipsis"]}`}>{d.review}</p>
              <a href="https://japanfigure.vn/blogs/huong-dan/phan-biet-hang-real-va-fake-nendoroid-kirby">
              <button type="button" className="btn btn-outline-danger">Xem Chi Tiết</button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
   
  );
}
const data = [
  {
    name: `Phân biệt hàng real và fake: Nendoroid Kirby`,
    img: `/assets/images/a3.png`,
    review: `11/7/2017 bởi Good Smile CompanyHiện nay, 
    các phiên bản hàng giả của Nendoroid Kirby từ Good Smile Company 
    đang được bán trên các sàn đấu giá online và trang web...`
  },
  {
    name: `Kakeibo phương pháp tiết kiệm, chi tiêu hợp lý`,
    img: `/assets/images/a2.png`,
    review: `Thận nhiêu trái?Bán máu bao nhiêu cho đủ?Lại tốn tiền nữa rồi...
    Những câu hỏi quen thuộc đều nhằm vào 1 vấn đề chung: Làm sao để chi tiêu hợp lí,....`
  },
  {
    name: `PHÂN BIỆT HÀNG REAL VÀ HÀNG FAKE: Nendoroid Touken Ranbu`,
    img: `/assets/images/a1.png`,
    review: `17/04/2017 bởi Good Smile CompanyCảnh báo hàng fake: 
    Nendoroid Touken RanbuHiện nay, sản phẩm fake Nendoroid của series 
    Touken Ranbu đang được bán tại các cuộc đấu giá trên Internet và....`
  },
  {
    name: `Khi nào 1 figure "có" tại Nhật Bản?`,
    img: `/assets/images/a2.png`,
    review: `KHI NÀO 1 FIGURE "CÓ" TẠI NHẬT BẢN?
    KHI "CÓ" THÌ SỐ LƯỢNG NHIỀU KHÔNG?"CÓ" RỒI MỚI ĐẶT LIỆU KỊP KHÔNG? Đây là những câu hỏi được
     rất nhiều bạn quan tâm.Trước tiên, Figure Nhật...`
  },
  
  
];

export default Sliders;
