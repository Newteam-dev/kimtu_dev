import React from 'react';
import { IProduct } from '../../interface/product';
import ProductItem from './products/item';
import { useData } from '../../hooks/usedata';
import Banner from './Banner';
import ContactLinks from './Contact';
import "../../css/Home.css"
const Home = () => {
  const { data, isLoading } = useData<IProduct>("products");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-lg text-yellow-600 font-medium">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="banner-container">
        <Banner />
      </div>

      <div className="contact-links">
        <ContactLinks />
      </div>

      <main className="flex-grow">
      <div className="course-header">
        <div>
          <h2 className="course-heading">
            <span style={{ marginRight: "0.5rem" }}>📚</span> KHÓA HỌC 2K7
          </h2>
          <p className="course-title">KHÓA 2K7 - LUYỆN THI THPTQG 2025</p>
        </div>
        <button className="course-button">Xem tất cả →</button>
      </div>
        <div className="grid">
          {data && data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
