import logo from "../assets/white-logo.png";

const FooterLinks = ({ title, links }) => {
  return (
    <ul className="md:text-left">
      <li className="text-white text-sm font-bold">{title}</li>
      {links.map((link) => (
        <li className="my-3" key={link.id}>
          <a
            href={link.to}
            className="text-gray-300 text-sm hover:text-[#27d3d6] duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <div className="bg-black py-12">
      <div className="w-full max-w-[1240px] mx-auto px-4 text-center flex flex-col justify-between md:flex-row gap-5">
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="logo"
            className="h-[20px] w-[100px] mx-auto md:mx-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <FooterLinks
            title="Features"
            links={[
              { name: "Link Shortening", id: 1, to: "#" },
              { name: "Branded Links", id: 2, to: "#" },
              { name: "Analytics", id: 3, to: "#" },
            ]}
          />
          <FooterLinks
            title="Resources"
            links={[
              { name: "Blog", id: 1, to: "#" },
              { name: "Developers", id: 2, to: "#" },
              { name: "Support", id: 3, to: "#" },
            ]}
          />
          <FooterLinks
            title="Company"
            links={[
              { name: "About", id: 1, to: "#" },
              { name: "Our Team", id: 2, to: "#" },
              { name: "Careers", id: 3, to: "#" },
              { name: "Contact", id: 4, to: "#" },
            ]}
          />
          <div className="flex justify-between gap-3 w-[50%] mx-auto md:w-full">
            <div className="text-white text-xl hover:text-[#27d3d6] duration-300 cursor-pointer">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div className="text-white text-xl hover:text-[#27d3d6] duration-300 cursor-pointer">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div className="text-white text-xl hover:text-[#27d3d6] duration-300 cursor-pointer">
              <ion-icon name="logo-pinterest"></ion-icon>
            </div>
            <div className="text-white text-xl hover:text-[#27d3d6] duration-300 cursor-pointer">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
