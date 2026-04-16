import { Link } from "react-router-dom";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { companyInfo } from "../../data/companyData";
import PageHero from "../../components/ui/PageHero";

const SecurityServices = () => {
  const service = companyInfo.services.security;

  const highlights = [
    {
      icon: Users,
      title: "Trained Personnel",
      desc: "Ex-servicemen and certified professionals",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      desc: "Round-the-clock security coverage",
    },
    { icon: Award, title: "Quality Assured", desc: "ISO certified processes" },
  ];

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: "Security Services" },
        ]}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Overview</span>
              <h2 className="section-title text-dark mb-6">
                Comprehensive Security Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.fullDesc}
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                alt="Security Services"
                className="w-full"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title-light">Our Security Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="bg-dark-100 p-6 flex items-start gap-4 group hover:bg-dark-200 transition-all"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                    {item}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="grid lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
            alt="Security Team"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-gray-100 p-12 lg:p-20 flex flex-col justify-center">
          <span className="section-label">Our Strengths</span>
          <h2 className="section-title text-dark mb-8">What Sets Us Apart</h2>

          <div className="space-y-4">
            {service.strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Secure Your Premises Today
          </h2>
          <p className="text-dark/70 mb-8 max-w-2xl mx-auto">
            Get in touch with our security experts for a comprehensive
            assessment of your security needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-dark">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="btn-outline border-dark text-dark hover:bg-dark hover:text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityServices;
