import React from 'react';
import Menu from 'components/ui/Menu';
import { BiGlobe } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: 'Hakkımızda',
        },
        {
          title: 'Kariyer',
        },
        {
          title: 'Teknoloji Kariyeri',
        },
        {
          title: 'İletişim',
        },
        {
          title: 'Sosyal Sorumluluk Projeleri',
        },
      ],
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Sıkça Sorulan Sorular',
        },
        {
          title: 'Kişisel Verilerin Korunması',
        },
        {
          title: 'Gizlilik Politikası',
        },
        {
          title: 'Kullanım Koşulları',
        },
        {
          title: 'Çerez Politikası',
        },
      ],
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          title: 'Bayimiz Olun',
        },
        {
          title: 'Deponuzu Kiralayın',
        },
        {
          title: 'GetirYemek Restoranı Olun',
        },
        {
          title: 'GetirÇarşı İşletmesi Olun',
        },
        {
          title: 'Zincir Restoranlar',
        },
      ],
    },
  ];
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin!
              </h6>
              <a href="/#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="/#">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="/#">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-sm text-gray-700 flex gap-x-8">
            &copy; 2022 Getir
            <a
              href="/#"
              className="text-primary-brand-color relative before:w-[3px] before:h-[3px] before:bg-primary-brand-color before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="/#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="/#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="/#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/#"
              className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 border border-gray-100 text-sm gap-x-2 rounded text-gray-500"
            >
              <BiGlobe size={16} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
