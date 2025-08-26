function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="footer grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex mt-2 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-small md:font-normal font-light text-gray-200">
          ©2025 Tonykok. All rights reserved.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <img src="/insta.svg" alt="icons" width={20} height={20} />
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <img src="/link.svg" alt="icons" width={20} height={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
