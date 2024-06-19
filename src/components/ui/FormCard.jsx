export default function FormCard({ children }) {
  return (
    <div className="flex flex-row py-1 px-6 gap-16 mt-4 mb-3 justify-center">
      {children}
    </div>
  );
}