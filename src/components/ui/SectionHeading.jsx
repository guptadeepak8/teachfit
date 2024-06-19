export default function SectionHeading({ title, desc }) {
  return (
    <div className="w-1/4">
      <h3 className="text-3xl font-semibold text-slate-900">{title}</h3>
      {desc && <h4 className="text-md">({desc})</h4>}
    </div>
  );
}