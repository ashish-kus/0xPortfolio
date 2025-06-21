const Experiences = () => {
  const data = {
    title: "Internship Trainee",
    company: "Samsung Innovation Campus",
    type: "Full-time",
    duration: "Jun 2024 – Sep 2024 · 4 mos",
    location: "On-site",
    description:
      "Completed an intensive AI training focused on real-world applications of Artificial Intelligence and Data Science. Gained hands-on experience by developing and deploying three practical AI projects, exploring concepts like machine learning, data analysis, and computer vision.",
    skills: ["Machine Learning", "Python (Programming Language)", "+9 skills"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
  };

  return (
    <div className=" text-secondary pl-6 ">
      {/* Top Section */}
      <div className="flex items-start gap-4">
        <div>
          <h3 className="text-3xl font-semibold">{data.title}</h3>
          <p className="text-2xl italic">
            {data.company} · {data.type}
          </p>
          <p className="text-lg">{data.duration}</p>
          <p className="text-lg">{data.location}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-lg leading-relaxed">{data.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {data.skills.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 text-lg  rounded-xl border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
