import React from "react";
import "./Intro.css";
import banner from "../../../../images/intro.jpeg";
import { Collapse } from "antd";

function Intro(props) {
  const onChange = (key) => {

  };

  const items = [
    {
      key: "1",
      label: <strong>Lịch sử hình thành, phát triển của ShopDunk</strong>,
      children: (
        <div>
          ShopDunk là cửa hàng số 1 tạo nên những trải nghiệm tuyệt vời cho quá trình 
          mua sắm sản phẩm công nghệ tại Việt Nam. Chúng tôi là đối tác ủy quyền tin cậy 
          của các hãng công nghệ uy tín hàng đầu trên thế giới như Apple. Ở mỗi điểm chạm, 
          chúng ta luôn kết nối, bàn bạc và trao đổi để cùng thống nhất mục tiêu chung, 
          bởi chúng ta không có khoảng cách.
        </div>
      ),
    },
    {
      key: "2",
      label: <strong>ShopDunk cung cấp những dòng iPhone nào?</strong>,
      children: (
        <div>
          ShopDunk là một trong những thương hiệu bán lẻ được Apple uỷ quyền tại
          Việt Nam, đáp ứng được các yêu cầu khắt khe từ Apple như: dịch vụ kinh
          doanh, dịch vụ chăm sóc khách hàng, vị trí đặt cửa hàng...
          <br />
          Những chiếc iPhone do Apple Việt Nam phân phối tại nước ta đều mang mã
          VN/A và được bảo hành 12 tháng theo theo tiêu chuẩn tại các trung tâm
          bảo hành Apple. Các dòng iPhone được cung cấp tại ShopDunk gồm: iPhone
          11, iPhone 12, iPhone 12 mini, iPhone 13 series, iPhone SE 3 (2022).
          <br />
          Phone 11 được trang bị màn hình LCD và không hỗ trợ HDR, nâng cấp với
          chế độ chụp đêm Night Mode cùng Deep Fusion. Camera trước được nâng độ
          phân giải từ 7MP lên thành 12MP. Được trang bị chip A13 Bionic và hỗ
          trợ công nghệ WiFi 6. Với 6 màu sắc bắt mắt: Đen, Trắng, Xanh Mint,
          Đỏ, Vàng, Tím.
          <br />
          iPhone 12 mini, iPhone 12 là những chiếc iPhone đầu tiên của hãng hỗ
          trợ mạng di động 5G. Apple đã thay đổi thiết kế của iPhone từ khung
          viền bo tròn thành khung viền vuông vức như những dòng iPhone 5 và sử
          dụng mặt kính trước Ceramic Shield. Ngoài ra, hộp của thiết bị iPhone
          12 và các dòng iPhone sau đều đã được loại bỏ củ sạc.
          <br />
          Tháng 9 năm 2021, Apple đã chính thức ra mắt 4 chiếc iPhone mới của
          hãng bao gồm iPhone 13 mini, iPhone 13, iPhone 13 Pro, iPhone 13 Pro
          Max. Các cụm Camera trên bộ 4 iPhone mới của Apple đều to hơn một chút
          so với thế hệ tiền nhiệm và phần tai thỏ ở mặt trước cũng được làm nhỏ
          hơn. Đối với iPhone 13 Pro và iPhone 13 Pro Max, Apple đã nâng cấp bộ
          nhớ tối đa của máy lên đến 1TB. Đi cùng với đó là tần số quét của dòng
          iPhone 13 cũng đã được nâng cấp lên 120Hz.
          <br />
          iPhone SE thế hệ 3 (còn gọi là iPhone SE 3 hay iPhone SE 2022) được
          Apple công bố vào tháng 3 năm 2022, kế nhiệm iPhone SE 2. Đây là một
          phần của iPhone thế hệ thứ 15, cùng với iPhone 13 và iPhone 13 Pro.
          Thế hệ thứ 3 có kích thước và yếu tố hình thức của thế hệ trước, trong
          khi các thành phần phần cứng bên trong được lựa chọn từ dòng iPhone
          13, bao gồm cả hệ thống trên chip A15 Bionic.
          <br />
        </div>
      ),
    },
    {
      key: "3",
      label: <strong>Mua giá tốt nhất tại ShopDunk</strong>,
      children: (
        <div>
          ShopDunk là đại lý uỷ quyền Apple tại Việt Nam với hệ thống 40 cửa
          hàng trên toàn quốc, trong đó có 11 Mono Store. Đến nay, ShopDunk đã
          trở thành điểm dừng chân lý tưởng cho iFans nói chung và thế hệ GenZ
          nói riêng bởi độ chuẩn và chất.
          <br />
          Không gian thiết kế và bài trí sản phẩm theo tiêu chuẩn của Apple,
          chia theo từng khu vực rõ ràng, bàn trải nghiệm rộng rãi và đầy đủ sản
          phẩm.
          <br />
          Tại ShopDunk luôn có mức giá tốt nhất cho người dùng cùng với nhiều
          chương trình hấp dẫn diễn ra liên tục trong tháng. Hãy đến với chúng
          tôi và trải nghiệm ngay những mẫu iPhone mới nhất với đội ngũ chuyên
          viên tư vấn được đào tạo bài bản từ Apple, sẵn sàng hỗ trợ bạn về sản
          phẩm, kỹ thuật hay các công nghệ mới nhất từ Apple.
          <br />
        </div>
      ),
    },
  ];
  return (
    <div className="intro">
      <img src={banner} alt="" />
      <div>
          <Collapse onChange={onChange} items={items} />
      </div>
    </div>
  );
}

export default Intro;
