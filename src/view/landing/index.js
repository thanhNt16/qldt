import React from "react";
import { Layout, Row, Col } from "antd";
import Header from "src/components/Header";

// import "./style.less";

export default function Landing() {
  const teacherServices = [
    {
      title:
        "Thời khoá biểu, phân công giảng dạy các lớp Lý thuyết, Thực hành, Thí nghiệm",
      img: "calendar-1.png",
    },
    {
      title: "Phân công Đồ án tốt nghiệp và Đồ án môn học",
      img: "notebook-2.png",
    },
    {
      title: "Tra cứu thông tin Sinh viên",
      img: "search-3.png",
    },
    {
      title: "Tra cứu thông tin học phần",
      img: "search-4.png",
    },
    {
      title: "Quản lý tài liệu, biểu mẫu",
      img: "file-5.png",
    },
    {
      title: "Kê khai khối lượng giảng dạy",
      img: "summary-6.png",
    },
    {
      title: "Thống kê, tổng hợp số liệu",
      img: "diagram-7.png",
    },
    {
      title: "Đồng bộ Thời khoá biểu với Google Calendar",
      img: "calendar-8.png",
    },
  ];

  const studentServices = [
    {
      title: "Tra cứu thông tin đồ án",
      desc:
        "Tra cứu thông tin phân công đồ án, tham khảo các Đồ án được nộp và lưu trữ online",
      img: "book-search-1.png",
    },
    {
      title: "Yêu cầu biểu mẫu online",
      desc:
        "Điền thông tin và gửi yêu cầu các loại biểu mẫu online. Viện sẽ xử lý và thông báo qua email cho Sinh viên khi hoàn thành, Sinh viên chỉ lên một lần để nhận kết quả",
      img: "desktop-2.png",
    },
    {
      title: "Đăng ký nguyện vọng Đồ án",
      desc:
        "Tham khảo các hướng đề tài của Giáo viên, đăng ký nguyện vọng là Đồ án với giáo viên và đề tài mong muốn",
      img: "templates-3.png",
    },
  ];

  const instructions = [
    {
      title: 'NHẬN TÀI KHOẢN',
      desc: 'Mỗi sinh viên được cấp một tài khoản với tài khoản và mật khẩu mặc định là mã số sinh viên',
      bg: '#582D7A'
    },
    {
      title: 'GỬI YÊU CẦU',
      desc: 'Sinh viên đăng nhập, điền biểu mẫu yêu cầu và nộp trên hệ thống Online',
      bg: '#AFEAFF'
    },
    {
      title: 'XỬ LÝ YÊU CẦU',
      desc: 'Giáo vụ Viện nhận yêu cầu online, xử lý và thông báo qua email khi hoàn thành',
      bg: '#7CAA46'
    },
    {
      title: 'NHẬN KẾT QUẢ',
      desc: 'Khi nhận được thông báo yêu cầu xử lý thành công, Sinh viên lên Văn phòng Viện để nhận kết quả.',
      bg: '#D5332B'
    }
  ]

  return (
    <Layout className="background-white">
      <Header />
      <div className="w-full">
        <picture>
          <source
            srcSet={require("images/hust-banner-landing.jpg?webp")}
            type="image/webp"
          />
          <source
            srcSet={require("images/hust-banner-landing.jpg")}
            type="image/jpeg"
          />
          <img
            className="w-full"
            src={require("images/hust-banner-landing.jpg?webp")}
          />
        </picture>
      </div>

      <div className="h-auto bg-white w-11/12 m-auto mt-8 mb-10">
        <h2 className="text-xl mb-8">DỊCH VỤ CHO GIẢNG VIÊN</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teacherServices.map((item) => (
            <div className="flex flex-col items-center">
              <picture>
                <source
                  srcSet={require(`images/${item.img}?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`images/${item.img}`)}
                  type="image/png"
                />
                <img
                  src={require(`images/${item.img}?webp`)}
                  className="h-16"
                />
              </picture>
              <p className="text-center mt-4">{item.title}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl mt-8 mb-8">DỊCH VỤ CHO SINH VIÊN</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {studentServices.map((item) => (
            <div className="flex flex-col items-center rounded shadow-lg p-10">
              <picture>
                <source
                  srcSet={require(`images/${item.img}?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`images/${item.img}`)}
                  type="image/png"
                />
                <img
                  src={require(`images/${item.img}?webp`)}
                  className="h-16"
                />
              </picture>
              <p className="text-center font-bold mt-4">{item.title}</p>
              <p className="text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl mt-10 mb-8">HƯỚNG DẪN SỬ DỤNG DỊCH VỤ TRỰC TUYẾN</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {instructions.map((item, index) => (
            <div className="flex flex-row items-center">
              <picture>
                <source
                  srcSet={require(`images/step-${index + 1}.png?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`images/step-${index + 1}.png`)}
                  type="image/png"
                />
                <img
                  src={require(`images/step-${index + 1}.png?webp`)}
                  className="object-fill h-full w-auto"
                />
              </picture>
              <div className="pl-5">
                <p className="font-bold" style={{ color: item.bg }}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
