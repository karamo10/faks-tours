export default function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-gray-900">
        {children}
      </h3>
      <div className="w-16 h-1 bg-orange-500 mt-2 rounded"></div>
    </div>
  );
}
