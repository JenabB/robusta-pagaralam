import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const isBrowser = typeof window !== 'undefined';

  const [screenSize, setScreenSize] = useState({
    width: isBrowser ? window.innerWidth || 0 : 0,
    height: isBrowser ? window.innerHeight || 0 : 0,
  });

  const getScreenSizeCategory = (width: number) => {
    try {
      if (width < 576) {
        return 'xs'; // extra-small
      } else if (width >= 576 && width < 768) {
        return 'sm'; // small
      } else if (width >= 768 && width < 992) {
        return 'md'; // medium
      } else {
        return 'lg'; // large
      }
    } catch (error) {
      console.error('Error determining screen size category:', error);
      return 'unknown'; // or provide a default category
    }
  };

  const handleResize = () => {
    if (isBrowser) {
      const width = window.innerWidth || 0;
      const height = window.innerHeight || 0;
      setScreenSize({ width, height });
    }
  };

  useEffect(() => {
    // Event listener untuk menangkap perubahan ukuran layar
    if (isBrowser) {
      window.addEventListener('resize', handleResize);

      // Membersihkan event listener saat komponen dibongkar
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isBrowser]); // useEffect hanya dijalankan jika di lingkungan browser

  // Inisialisasi nilai awal saat komponen pertama kali dirender
  useEffect(() => {
    handleResize();
  }, [isBrowser]);

  const screenSizeCategory = getScreenSizeCategory(screenSize.width);

  return {
    ...screenSize,
    category: screenSizeCategory,
  };
};

export default useScreenSize;
