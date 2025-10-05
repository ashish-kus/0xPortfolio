// Button.jsx
export default function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-sm sm:text-base rounded-md border bg-secondary text-primary font-semibold border-gray-700"
    >
      {label}
    </button>
  );
}
