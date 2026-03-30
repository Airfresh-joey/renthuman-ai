const stats = [
  { number: "10,000+", label: "Events Staffed" },
  { number: "500+", label: "Brands Served" },
  { number: "50", label: "States Covered" },
  { number: "Since 2010", label: "Industry Leader" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-1">{stat.number}</div>
          <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
