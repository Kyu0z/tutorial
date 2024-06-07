import RecentPurchase from '@src/components/RecentPurchase';
import Search from '@src/components/Search';
import { useState } from 'react';

const BranchPage = () => {
  const [province, setProvince] = useState<string>('HCM');
  const [store, setStore] = useState<string>('THUDUC');
  const [address, setAddress] = useState<string>(
    '105 Đường số 8, P.Trường Thạnh, Thủ Đức'
  );

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedProvince = event.target.value;
    setProvince(selectedProvince);
    // Reset selected store when province changes
    setStore('');

    // Update address based on selected province
    if (selectedProvince === 'HCM' && store === 'THUDUC') {
      setAddress('105 Đường số 8, P.Trường Thạnh, Thủ Đức');
    } else if (selectedProvince === 'HN') {
      setAddress('');
    } else {
      setAddress('');
    }
  };

  const handleStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value;
    setStore(selectedStore);

    // Update address based on selected store
    if (selectedStore === 'THUDUC') {
      setAddress('105 Đường số 8, P.Trường Thạnh, Thủ Đức');
    } else if (selectedStore === 'Q2') {
      setAddress('13 Đường 34, KP5, Q2 - HCM');
    } else if (selectedStore === 'DONGDA') {
      setAddress('57 P. Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội');
    } else if (selectedStore === 'TAYHO') {
      setAddress('Ngách 29 Ngõ 565 Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội');
    } else {
      setAddress('');
    }
  };

  return (
    <div className='max-w-[1200px] h-[600px] mx-auto pt-20'>
      <h2 className='text-center text-3xl font-bold pb-10'>
        HỆ THỐNG CỬA HÀNG
      </h2>
      <div className='flex items-center max-h-[600px]'>
        <div className='border solid border-black rounded-lg p-6 h-[600px] w-full'>
          <h3 className='text-yellow-700 text-2xl font-bold pb-4'>
            Tìm cửa hàng
          </h3>
          <div>
            <div>Chọn tỉnh thành</div>
            <select
              value={province}
              onChange={handleProvinceChange}
              className='appearance-none w-full mt-2 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-indigo-500 mb-4 '
            >
              <option value=''>-- Chọn tỉnh thành --</option>
              <option value='HCM'>HCM</option>
              <option value='HN'>HN</option>
            </select>
          </div>
          <div>
            <div>Chọn cửa hàng</div>
            <select
              value={store}
              onChange={handleStoreChange}
              className='appearance-none w-full mt-2 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-indigo-500 mb-4 '
            >
              <option value=''>-- Chọn cửa hàng --</option>
              {province === 'HCM' && (
                <>
                  <option value='THUDUC'>Thủ đức, HCM</option>
                  <option value='Q2'>Q2, HCM</option>
                </>
              )}
              {province === 'HN' && (
                <>
                  <option value='DONGDA'>Đống Đa, HN</option>
                  <option value='TAYHO'>Tây Hồ, HN</option>
                </>
              )}
            </select>
          </div>
          <div>
            <h3 className='text-yellow-700 text-2xl font-bold pb-4'>Địa chỉ</h3>
            <p>{address}</p>
          </div>
          <div className='mt-8'>
            <Search />
          </div>
        </div>
        <div className='pl-4'>
          {store === 'THUDUC' && (
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.927761337572!2d106.8208628745753!3d10.816840258447934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527b009f9866b%3A0x93966f3eb8d2bca2!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gS-G7uSBUaHXhuq10IE3DtGkgVHLGsOG7nW5nIE5hbSBWaeG7h3Q!5e0!3m2!1svi!2s!4v1714966900906!5m2!1svi!2s'
              width='805'
              height='650'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          )}
          {store === 'Q2' && (
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.23176970768!2d106.74163264742491!3d10.793552786675878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175260eb6aa1753%3A0x271c98cb61b80c33!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gS-G7uCBUSFXhuqxUIFTDgk4gUEjDgVQgTE9ORw!5e0!3m2!1svi!2s!4v1714973911102!5m2!1svi!2s'
              width='805'
              height='650'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          )}
          {store === 'DONGDA' && (
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14897.794586242935!2d105.81022326178044!3d21.014727220688847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab66efbac8ef%3A0x2139a2cfecb24fb9!2zQ8O0bmcgdHkgUXXhuqNuIGzDvSBUw7JhIG5ow6AgUE1D!5e0!3m2!1svi!2s!4v1714975328367!5m2!1svi!2s'
              width='805'
              height='650'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          )}
          {store === 'TAYHO' && (
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.7983248207379!2d105.80708186412507!3d21.064940489835273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab000e35eb27%3A0xe3ee5582b2f987c9!2sBomBay%20Chibi!5e0!3m2!1svi!2s!4v1714975256480!5m2!1svi!2s'
              width='805'
              height='650'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          )}
        </div>
      </div>
      <RecentPurchase />
    </div>
  );
};

export default BranchPage;
