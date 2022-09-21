import Button from "./";

export default function PrimaryButton({ children, ...rest }) {
  return (
    <Button
      {...rest}
      className="bg-gradient-to-br from-blue-900 to-blue-500 text-primary-content"
    >
      {children}
    </Button>
  );
}
