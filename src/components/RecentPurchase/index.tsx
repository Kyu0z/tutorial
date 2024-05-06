import React, { useState, useEffect } from 'react';
import ip14 from '@src/assets/images/ip14.jpg';
import s23 from '@src/assets/images/s23.jfif';
import gp7 from '@src/assets/images/gp7.jpg';

interface Product {
  name: string;
  image: string;
  timeAgo: string;
}

const RecentPurchase: React.FC = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
  const [displayProduct, setDisplayProduct] = useState<boolean>(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products: Product[] = [
    {
      name: 'Iphone 14 128GB - Chính hãng VN/A',
      image: ip14,
      timeAgo: '45 phút',
    },
    {
      name: 'Samsung Galaxy S22 Ultra',
      image: s23,
      timeAgo: '1 giờ',
    },
    {
      name: 'Google Pixel 7 Pro',
      image: gp7,
      timeAgo: '2 giờ',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProduct(false);
      setTimeout(() => {
        setCurrentProductIndex(
          (prevIndex) => (prevIndex + 1) % products.length
        );
        setDisplayProduct(true);
      }, 8000);
    }, 13000); // 5s hiển thị + 8s ẩn đi

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className='absolute bottom-0 right-0'>
      {displayProduct && (
        <div className='relative p-3 flex items-center border solid border-gray-400 mr-4 mb-2'>
          <div className='w-16 h-16'>
            <img
              src={products[currentProductIndex].image}
              alt='phone'
              className='w-full h-full'
            />
          </div>
          <div className='pl-4'>
            <h3 className='text-blue-600'>Sản phẩm</h3>
            <h3 className='font-bold'>{products[currentProductIndex].name}</h3>
            <p className='text-gray-400'>
              Đã được mua cách đây {products[currentProductIndex].timeAgo}
            </p>
          </div>
          <div className='absolute top-0 right-2 text-base'>
            <button>x</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentPurchase;
