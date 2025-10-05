const formatKey = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const Skills = ({ skills }) => {
  return (
    <section className="mt-12 md:mt-20 lg:mt-28">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold pb-5">
        Skills
      </h2>
      <div className="text-secondary">
        <div className="space-y-6">
          {Object.entries(skills).map(([key, items]) => (
            <div key={key}>
              <p className="text-lg md:text-xl lg:text-xl mb-2 font-semibold">
                {formatKey(key)}:
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm sm:text-base rounded-md border border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
