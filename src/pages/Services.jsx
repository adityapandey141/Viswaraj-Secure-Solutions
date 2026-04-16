import { Link } from "react-router-dom";
import {
  Shield,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { companyInfo } from "../data/companyData";
import PageHero from "../components/ui/PageHero";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: companyInfo.services.security.title,
      description: companyInfo.services.security.fullDesc,
      features: companyInfo.services.security.services.slice(0, 5),
      link: "/services/security",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Building2,
      title: companyInfo.services.facility.title,
      description: companyInfo.services.facility.fullDesc,
      features: companyInfo.services.facility.services.slice(0, 5),
      link: "/services/facility",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Briefcase,
      title: companyInfo.services.risk.title,
      description: companyInfo.services.risk.fullDesc,
      features: companyInfo.services.risk.services.slice(0, 5),
      link: "/services/risk",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive security and facility management solutions tailored to your needs"
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title text-dark">
              End-to-end solutions designed
              <br />
              to protect your assets
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 ${index % 2 === 0 ? "" : "direction-rtl"}`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] lg:h-[500px] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 0 ? "bg-dark" : "bg-dark-100"} p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.link} className="btn-primary w-fit">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Need a Customized Solution?
          </h2>
          <p className="text-dark/70 text-lg mb-8 max-w-2xl mx-auto">
            We understand that every organization has unique requirements.
            Contact us for a tailored solution that fits your specific needs.
          </p>
          <Link to="/contact" className="btn-dark">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
