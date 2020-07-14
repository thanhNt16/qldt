import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#9B0F03" }}>
      <div className="h-auto w-11/12 m-auto flex flex-row items-center py-10">
        <picture>
          <source srcSet={require("images/logo.jpg?webp")} type="image/webp" />
          <source srcSet={require("images/logo.jpg")} type="image/jpeg" />
          <img className="mr-10 hidden md:block" style={{ height: "100px" }} src={require("images/logo.jpg?webp")} />
        </picture>
        <div>
          <p className="text-white text-lg mb-2">
            HỆ THỐNG DO TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI THIẾT KẾ & PHÁT TRIỂN.
          </p>
          <p className="text-white text-md mb-0">
            Để hỗ trợ vui lòng gửi mail đến{" "}
            <span className="font-bold">hung.nguyenthanh2@hust.edu.vn</span>
            <br />
            Hotline: <span className="font-bold">09.77.86.33.11</span>
            <br />
            Địa chỉ:{" "}
            <span>
              Số 1 Đại Cồ Việt, Phường Bách Khoa, Quận Hai Bà Trưng, Thành phố
              Hà Nội
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
