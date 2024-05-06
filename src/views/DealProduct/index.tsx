import flash from '@src/assets/images/flash.webp';
import hotImage from '@src/assets/images/hot-icon.webp';
import TimeoutPage from '@src/components/TimeoutPage';
import { useEffect, useState } from 'react';

const DealProduct = () => {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const contents: string[] = [
    'Sản phẩm chính hãng, Mới 100%, Bảo hàng đến 2 năm, 1 ĐỔI 1 trong 10 ngày do lỗi NSX',
    'Nhiều ưu đãi hấp dẫn cho khách hàng thân thiết',
    'Giao hàng miễn phí toàn quốc trong vòng 24 giờ',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-[1300px] h-[676px] mt-6 mx-auto bg-[#000f8f] rounded-md p-1'>
      <div className='flex items-center justify-between px-4 pb-4 text-[#fff] border-b solid border-[#fff]'>
        <div className='flex items-center'>
          <img
            src={hotImage}
            alt='hot-image'
            className='w-[100px] h-[58px] flash-animation hover:cursor-pointer'
          />
          <h2 className='text-2xl font-bold pl-4 hover:text-orange-400 hover:cursor-pointer'>
            DEAL NỔI BẬT
          </h2>
        </div>
        <div>
          <p>{contents[contentIndex]}</p>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-[30%] pt-8'>
          <TimeoutPage />
          <div>
            <img src={flash} alt='flash-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealProduct;
