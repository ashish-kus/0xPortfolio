const Experience = ({ experience }) => {
  return (
    <div className="text-secondary py-8">
      {/* Top Section */}
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {experience.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl italic">
            {experience.company} · {experience.type}
          </p>
          <p className="text-sm sm:text-base md:text-lg italic">
            {experience.duration}
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            {experience.location}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed italic">
        {experience.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.skills.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm sm:text-base md:text-lg rounded-xl border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
