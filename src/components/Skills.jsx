const formatKey = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const Skills = ({ skills }) => {
  return (
    <div className=" text-secondary">
      <div className="space-y-6">
        {Object.entries(skills).map(([key, items]) => (
          <div key={key}>
            <h3 className="text-2xl mb-2 font-semibold">{formatKey(key)}:</h3>
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
  );
};

export default Skills;
