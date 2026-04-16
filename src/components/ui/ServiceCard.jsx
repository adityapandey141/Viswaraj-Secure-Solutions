import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="card card-hover p-8 group">
      <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group/link"
      >
        Read More
        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

export default ServiceCard
