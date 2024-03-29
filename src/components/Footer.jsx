import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            loading="lazy"
            src={logo}
            alt="hookbank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-5 max-w-[310pxs]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(({ links, title }, idx) => (
            <div key={idx} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {title}
              </h4>
              <ul className="list-none mt-4">
                {links.map(({ link, name }, idx) => (
                  <li
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      idx !== links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    key={idx}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
          Copyright 2024 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              loading="lazy"
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== social.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
