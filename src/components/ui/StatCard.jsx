const StatCard = ({ value, label }) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{value}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

export default StatCard
