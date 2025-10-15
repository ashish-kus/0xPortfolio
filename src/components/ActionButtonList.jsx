import ActionButton from "./ActionButton.jsx";
import { Link } from "react-router-dom";

export default function Home({ data }) {
  const { resume, blog } = data;

  const downloadResume = () => {
    // Replace URL with your hosted resume
    const link = document.createElement("a");
    link.href = { resume };
    link.download = "Ashish_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToBlog = () => {
    window.open(blog, "_blank");
  };

  return (
    <div className="flex gap-4 py-4">
      <ActionButton label="Download Resume" onClick={downloadResume} />
      <ActionButton label="Blogs" onClick={goToBlog} />
      <Link to="/projects">
        <ActionButton label="Projects" />
      </Link>
    </div>
  );
}
