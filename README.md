- Tên component:

  - Component aboutUS đặt sai tên => AboutUs; function Appeer => Appear
  - Component tên là CartItem nhưng tên CSS lại là cart.module.css gây nhầm lẫn cho reader
  - tên component là một động từ thay vì 1 danh từ, ý nghĩa không liên quan gì đến các trang about us gây khó hiểu (Kakeibo, appear, instruct)
  - dùng Pascal case nhưng tên file CSS phải là Camel case:

- Cách đặt tên biến cho module css không có ý nghĩa: import x from '@/styles/card.module.css' x làm người đọc khó hiểu lẫn nhìn trong code bị rối

- file import đến 3 module css dẫn đến khó sửa sau này cho người khác (about-us/\*\* \*/)

- Nhiều folder hay file và hàm tạo ra nhưng không sử dụng

- Phát hiện còn console.log hay comment sai trong production:

- Cách sắp xếp cái import theo thứ tự
  file hệ thống, lib, framework > component,.. > CSS

- Không chia Module hoặc tách Component dẫn đến 1 file quá nhiều dòng code

- Nhiều attribute đã bị cảnh báo lỗi thời nhưng vẫn không xóa hay đổi

- const BlogItem = ({ image, title, title2, title3, title4, date, href }): đặt tên props gây khó hiểu

- aboutUs có đến 3 pages liên quan nhưng lại để ở ngoài folder about-us

- Nhiều hàm khai báo nhưng không sử dụng

- Xắp xếp lại folder
