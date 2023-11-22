// eslint-disable-next-line react/prop-types
const WriteButton = ({ children }) => (
  <button
    className="
      bg-emerald-300 hover:bg-emerald-400 
      dark:bg-emerald-500 dark:hover:bg-emerald-600 
      transition-colors py-2 w-full rounded-lg"
  >
    {children}
  </button>
);

export default WriteButton;
