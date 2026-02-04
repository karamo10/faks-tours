
export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 bg-orange-500 rounded-full"></span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
