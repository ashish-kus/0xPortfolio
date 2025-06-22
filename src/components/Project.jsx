import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const Project = ({ data }) => {
  const { name, summary, url, imageUrl, techstack, details } = data;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="pt-4 flex flex-col border rounded-3xl border-gray-700 text-secondary">
      {/* Image */}
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />

      {/* Header */}
      <div className="mx-3 pt-4 px-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{name}</h3>
      </div>

      {/* Tech Stack */}
      <div className="px-2 flex flex-wrap gap-2 mt-4">
        {techstack.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm sm:text-base md:text-lg rounded-md border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="p-4">
        <h5 className="mb-2 text-base sm:text-lg md:text-xl font-semibold">
          Description
        </h5>
        <p className="leading-relaxed text-sm sm:text-base md:text-lg">
          {summary}
        </p>
      </div>

      {/* Modal Trigger */}
      <div className="px-4 pb-4 mt-auto flex justify-end">
        <Button onPress={onOpen} radius="sm">
          Know More
        </Button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        size="xl"
        backdrop="blur"
        onOpenChange={onOpenChange}
        className="text-secondary border border-gray-700"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-primary text-lg sm:text-xl md:text-2xl font-semibold">
                {name}
              </ModalHeader>

              <ModalBody className="bg-primary text-sm sm:text-base md:text-lg">
                {details.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </ModalBody>

              <ModalFooter className="bg-primary">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border border-gray-700 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.373 0 12c0 5.303 
                      3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 
                      1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 
                      0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                      0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 
                      2.045.138 3 .405 2.28-1.552 3.285-1.23 
                      3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                      1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                      5.92.435.375.81 1.096.81 2.22 0 1.606-.015 
                      2.896-.015 3.286 0 .315.21.69.825.57C20.565 
                      21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Project;
