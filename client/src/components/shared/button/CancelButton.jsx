import Button from "./";

export default function CancelButton({ children }) {
  return (
    <Button className="text-red-600 background-transparent font-bold">
      {children}
    </Button>
  );
}
