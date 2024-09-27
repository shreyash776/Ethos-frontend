const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className="bg-gray-900 text-white z-50">
      <p className="text-center text-gray-500 border-t-2 border-gray-700 ">
        © {currentYear} PixelFace. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;