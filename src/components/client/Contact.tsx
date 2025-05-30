import React from "react";
import "../../css/ContactLinks.css";

const contacts = [
  {
    href: "#",
    title: "Đăng kí khóa học em inbox Zalo thầy Thuận",
    img: "https://thaythuan.vn/zalo.webp",
    alt: "INBOX ZALO THẦY THUẬN",
    mainText: "INBOX ZALO THẦY THUẬN",
    subText: "Đăng kí khóa học em inbox Zalo thầy Thuận",
  },
  {
    href: "#",
    title: "Follow Facebook trang cá nhân thầy để cập nhật tài liệu hay",
    img: "https://thaythuan.vn/zalo.webp",
    alt: "FACEBOOK THẦY THUẬN",
    mainText: "FACEBOOK THẦY THUẬN",
    subText: "Follow Facebook trang cá nhân thầy để cập nhật tài liệu hay",
  },
  {
    href: "#",
    title:
      "Combo khóa CTG chuyên sâu trọn cả năm không phát sinh chi phí, tặng 2 sách và giảm 50%",
    img: "https://thaythuan.vn/zalo.webp",
    alt: "FANPAGE THẦY THUẬN LIVESTREAM",
    mainText: "FANPAGE THẦY THUẬN LIVESTREAM",
    subText:
      "Combo khóa CTG chuyên sâu trọn cả năm không phát sinh chi phí, tặng 2 sách và giảm 50%",
  },
  {
    href: "#",
    title: "Follow youtube để cập nhật livestream, tài liệu Toán hay",
    img: "https://thaythuan.vn/zalo.webp",
    alt: "KÊNH YOUTUBE THẦY THUẬN",
    mainText: "KÊNH YOUTUBE THẦY THUẬN",
    subText: "Follow youtube để cập nhật livestream, tài liệu Toán hay",
  },
  {
    href: "#",
    title: "Nhóm hỏi đáp, thảo luận trao đổi và hỗ trợ học tập",
    img: "https://thaythuan.vn/zalo.webp",
    alt: "KÊNH CHÁT NHẬN TÀI LIỆU 2K7",
    mainText: "KÊNH CHÁT NHẬN TÀI LIỆU 2K7",
    subText: "Nhóm hỏi đáp, thảo luận trao đổi và hỗ trợ học tập",
  },
  {
    href: "#",
    title: "Tham gia vào group để hỏi bài",
    img: "https://thaythuan.vn/zalo.webp",
    alt: "GROUP HỌC TẬP & TRAO ĐỔI BÀI 2K7",
    mainText: "GROUP HỌC TẬP & TRAO ĐỔI BÀI 2K7",
    subText: "Tham gia vào group để hỏi bài",
  },
];

const ContactLinks: React.FC = () => {
  return (
    <div className="contact-grid">
      {contacts.map((item, index) => (
        <a
          key={index}
          href={item.href}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={item.img} alt={item.alt} className="contact-img" />
          <div className="contact-text">
            <p className="contact-main" title={item.mainText}>
              {item.mainText}
            </p>
            <p className="contact-sub" title={item.subText}>
              {item.subText}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
