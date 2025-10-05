const Experience = ({ data }) => {
  return (
    <section className="mt-12 md:mt-20 lg:mt-28">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold font-mono pb-5">
        Experiences
      </h2>

      <div className="space-t-8">
        {data.map((experience, index) => (
          <div key={index} className="text-secondary pb-8">
            {/* Top Section */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {experience.title}
                </h3>

                <div className="flex justify-between flex-wrap">
                  <p className="text-sm sm:text-base md:text-lg italic">
                    {experience.company} · {experience.type} ·{" "}
                    {experience.location}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base italic">
                    {experience.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm md:text-md leading-relaxed italic text-justify">
              {experience.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs sm:text-sm md:text-base rounded-xl border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
