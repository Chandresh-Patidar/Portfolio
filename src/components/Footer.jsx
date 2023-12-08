import { github, linkedin } from "../assets/index.js";

const socialMediaLinks = [
  {
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/chandresh-patidar-/",
  },
  {
    title: "GitHub",
    icon: github,
    url: "https://github.com/Chandresh-Patidar",
  },
];

// Footer
const Footer = () => {
  return (
    <footer className=" w-full text-center z-20 bg-primary">
      <div className="flex justify-center items-center gap-5 p-5">
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer">
            <img
              src={link.icon}
              alt={link.title}
              title={link.title}
              className="w-10 h-10 object-contain"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
