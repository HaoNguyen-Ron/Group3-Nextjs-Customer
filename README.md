Các lỗi code convention được phát hiện 
1) Tên component: dùng Pascal case nhưng tên file CSS phải là Camel case: 
    Slider.module.css -> slider.module.css
    Banner.module.css -> banner.module.css
    ....

2) Nhiều file css tạo ra nhưng trống

3) Cách đặt tên biến cho module css không có ý nghĩa: import x from '@/styles/card.module.css' x làm người đọc khó hiểu lẫn nhìn trong code bị rối
    file đã sửa: Card.jsx, CardList.jsx,...

4) Các tag cùng cấp nên cách 1 dòng đễ dễ đọc
    file đã sửa: Card.jsx, CardList.jsx, BlogNew.jsx, Collection.js

5) Phát hiện còn console.log hay comment sai trong production: 
    file đã sửa:CardList.jsx, filter.js, collection.js

6) Cách sắp xếp cái import theo thứ tự: file hệ thống, lib, framework > component,.. > CSS
    file đã sửa:CardList.jsx,...

7) aboutUs.js : 
    + function AboutUS đặt sai tên => AboutUs; function Appeer => Appear
    + Không chia Module hoặc tách Component dẫn đến 1 file quá nhiều dòng code 
    + Nhiều attribute đã bị cảnh báo lỗi thời nhưng vẫn không xóa hay đổi (layout='responsive')
    + Nhiều hàm khai báo nhưng không dùng đến
    + const BlogItem = ({ image, title, title2, title3, title4, date, href }): đặt tên props gây khó hiểu cho người đọc 
    + file import đến 3 module css dẫn đến khó sửa sau này cho người khác
    + aboutUs có đến 3 pages liên quan nhưng lại để ở ngoài folder about-us
    + Nhiều hàm khai báo nhưng không sử dụng
    + Đặt tên component là một động từ thay vì 1 danh từ lẫn ý nghĩa không liên quan gì đến các trang about us gây khó hiểu (Kakeibo, appear, instruct)