import { Check } from 'lucide-react'

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
        <Check className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h4 className="font-semibold text-dark mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
