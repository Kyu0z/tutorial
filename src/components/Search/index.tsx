// import React, { useState, useEffect } from 'react';

// const Search: React.FC = () => {
//   const placeholderText = 'Bạn muốn tìm gì...';
//   const [placeholder, setPlaceholder] = useState('');
//   const [placeholderIndex, setPlaceholderIndex] = useState(0);
//   const [isFocused, setIsFocused] = useState(false); // Trạng thái focus

//   useEffect(() => {
//     const typePlaceholder = () => {
//       setPlaceholder((prev) => {
//         if (placeholderIndex < placeholderText.length) {
//           return prev + placeholderText.charAt(placeholderIndex);
//         } else {
//           setPlaceholderIndex(0); // Reset chỉ số về 0
//           return ''; // Đặt lại placeholder để bắt đầu từ đầu
//         }
//       });

//       setPlaceholderIndex(
//         (prevIndex) => (prevIndex + 1) % (placeholderText.length + 1)
//       );
//     };

//     const intervalId = setInterval(typePlaceholder, 200); // Tốc độ chạy chữ

//     return () => clearInterval(intervalId); // Dọn dẹp khi component unmount
//   }, [placeholderIndex, placeholderText]);

//   const inputStyle: React.CSSProperties = {
//     borderBottom: isFocused ? '2px solid #007bff' : '2px solid #f2f2f2', // Hiệu ứng border khi focus
//     padding: '2.5px 15px',
//     backgroundColor: '#fff',
//     color: '#333',
//     transition: 'border-color 0.3s',
//   };

//   return (
//     <div>
//       <input
//         id='search'
//         type='text'
//         placeholder={placeholder}
//         className='border-b solid border-[#f2f2f2] px-[15px] py-[2.5px] bg-[#fff] text-[#333]'
//         style={inputStyle}
//         onFocus={() => setIsFocused(true)} // Xử lý khi focus vào input
//         onBlur={() => setIsFocused(false)} // Xử lý khi blur khỏi input
//       />
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from 'react';

const Search: React.FC = () => {
  const placeholderText = 'Bạn muốn tìm gì...';
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false); // Trạng thái focus

  useEffect(() => {
    const typePlaceholder = () => {
      if (placeholderIndex < placeholderText.length) {
        const slicedText = placeholderText.slice(0, placeholderIndex + 1); // Cắt chuỗi gốc từ đầu đến chỉ số hiện tại
        setPlaceholder(slicedText); // Gán chuỗi cắt được vào placeholder
        setPlaceholderIndex((prevIndex) => prevIndex + 1); // Tăng chỉ số để chuỗi cắt tiếp theo
      } else {
        setPlaceholder(''); // Đặt lại placeholder sau khi hiển thị hoàn thành
        setPlaceholderIndex(0); // Đặt lại chỉ số
      }
    };

    const intervalId = setInterval(typePlaceholder, 200); // Tốc độ chạy chữ

    return () => clearInterval(intervalId); // Dọn dẹp khi component unmount
  }, [placeholderIndex, placeholderText]);

  const inputStyle: React.CSSProperties = {
    borderBottom: isFocused ? '2px solid #007bff' : '2px solid #f2f2f2', // Hiệu ứng border khi focus
    padding: '2.5px 15px',
    backgroundColor: '#fff',
    color: '#333',
    transition: 'border-color 0.3s',
  };

  return (
    <div>
      <input
        id='search'
        type='text'
        placeholder={placeholder}
        className='border-b solid border-[#f2f2f2] px-[15px] py-[2.5px] bg-[#fff] text-[#333]'
        style={inputStyle}
        onFocus={() => setIsFocused(true)} // Xử lý khi focus vào input
        onBlur={() => setIsFocused(false)} // Xử lý khi blur khỏi input
      />
    </div>
  );
};

export default Search;
