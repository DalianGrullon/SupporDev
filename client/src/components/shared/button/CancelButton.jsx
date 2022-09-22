import Button from "./";

export default function CancelButton({ children, ...rest }) {
  return (
    <Button
      {...rest}
      className="text-red-600 background-transparent hover:text-red-400 shadow-none hover:shadow-none font-bold"
    >
      {children}
    </Button>
  );
}
