export default function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`m-2 px-3 py-2.5 font-medium text-lg font-mono leading-tight uppercase rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
