const Experience = ({ experience }) => {
  return (
    <div className=" text-secondary pl-6  py-8">
      {/* Top Section */}
      <div className="flex items-start gap-4">
        <div>
          <h3 className="text-3xl font-semibold">{experience.title}</h3>
          <p className="text-2xl italic">
            {experience.company} · {experience.type}
          </p>
          <p className="text-lg">{experience.duration}</p>
          <p className="text-lg">{experience.location}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-lg leading-relaxed">{experience.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.skills.map((tag, index) => (
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

export default Experience;
