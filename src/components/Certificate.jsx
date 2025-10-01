const Certificate = ({ data }) => {
  const {
    title,
    summery,
    issuer,
    issueDate,
    credentialId,
    credentialUrl,
    logo,
    skills,
  } = data;

  return (
    <div className="text-secondary  py-8 w-full ">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {title}
          </h3>
          <div className="flex  justify-between">
            <p className="text-base sm:text-lg md:text-xl font-bold">
              {issuer}
            </p>
            <p className="text-sm sm:text-md md:text-lg italic">
              Issued {issueDate} · Credential ID {credentialId}
            </p>
          </div>

          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed italic text-justify">
            {summery}
          </p>
        </div>
      </div>

      {/* Show Credential Button */}
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-1 text-xs sm:text-sm font-medium text-secondary border border-secondry rounded-md hover:bg-white hover:text-black transition"
        >
          Show credential ↗
        </a>
      )}

      {/* Skills */}
      <div className="mt-4 text-xs sm:text-sm md:text-base text-gray-300">
        <strong>Skills: </strong>
        {skills.join(" · ")}
      </div>
    </div>
  );
};

export default Certificate;
