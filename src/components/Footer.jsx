import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 text-secondary py-4 px-4 flex flex-row justify-between items-center text-sm">
      <p className="mb-2 sm:mb-0">
        © {new Date().getFullYear()} Ashish Kushwaha
      </p>
      <div className="flex gap-4 text-xl">
        <a
          href="https://github.com/ashish-kus"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-kushwaha2408"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:ashish.kus2408@gmail.com"
          className="hover:text-white transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
