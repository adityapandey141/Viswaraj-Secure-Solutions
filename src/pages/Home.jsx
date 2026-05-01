import { Link } from "react-router-dom";
import {
  Shield,
  Building2,
  Briefcase,
  ArrowRight,
  Phone,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { companyInfo } from "../data/companyData";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Security Services",
      description:
        "Professional manned guarding, surveillance systems, and access control solutions.",
      link: "/services/security",
    },
    {
      icon: Building2,
      title: "Facility Management",
      description:
        "Complete housekeeping, maintenance, and support services for your premises.",
      link: "/services/facility",
    },
    {
      icon: Briefcase,
      title: "Risk Solutions",
      description:
        "Strategic risk assessment, compliance management, and corporate consulting.",
      link: "/services/risk",
    },
  ];

  return (
    <>
      {/* Hero Section - BeTheme Style */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="relative z-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] mb-8">
                Securing spaces
                <br />
                <span className="text-dark">for better</span>
                <br />
                <span className="text-dark">business</span>
              </h1>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link to="/services" className="btn-dark">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right - Image with Yellow Pattern */}
            <div className="relative hidden lg:block">
              {/* Yellow Geometric Pattern */}
              <div className="absolute -top-20 -right-20 w-[500px] h-[600px] z-0">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <polygon
                    points="200,0 400,100 400,400 200,500 0,400 0,100"
                    fill="#ff2d2d"
                  />
                </svg>
              </div>

              {/* Main Image */}
              <div className="relative z-10 ml-12">
                <img
                  src="heroimg.jpg"
                  alt="Security Professional"
                  className="w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Stats - BeTheme Style */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Stats */}
            <div>
              <span className="section-label">About Us</span>
              <h2 className="section-title text-dark mb-8">
                we've been building
                <br />
                our experience
                <br />
                since 1998.
              </h2>

              <div className="grid grid-cols-4 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    539
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    satisfied clients
                    <br />
                    in our company
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    23
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    company branches
                    <br />
                    in India
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    987
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    projects we've
                    <br />
                    completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    4.8
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    client satisfaction
                    <br />
                    rate of works
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Description */}
            <div className="lg:pt-16">
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.about.intro}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                A professional team that has proven manual work and regular
                safety is the best, making it better for any of those
                professional services.
              </p>
              <Link to="/about" className="btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section with Image - BeTheme Style */}
      <section className="bg-dark">
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative h-[500px] lg:h-auto">
            <img
              src="whatwedo.jpg"
              alt="Security Planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title-light mb-6">
              comprehensive security
              <br />
              and facility
              <br />
              management solutions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {companyInfo.about.description}
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Professional & Trained Workforce",
                "Technology-Driven Solutions",
                "Customized Service Packages",
                "24*7 Support Available",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/services" className="btn-primary w-fit">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - BeTheme Style */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Services</span>
            <h2 className="section-title-light">
              security services
              <br />
              for corporate, public
              <br />
              and individual clients
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Our full-service solutions combine seamless tech solutions at
              their best in every specific industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-dark-200 p-8 group hover:bg-dark-300 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlight Section */}
      <section className="grid lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="ourexpertise.jpg"
            alt="Corporate Building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title text-dark mb-6">
            Inspire corporate
            <br />
            security excellence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Corporate security solutions are developed for each project
            separately, using combined skills and expertise of our specialists.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our team ensures complete protection through comprehensive risk
            assessment, trained personnel, and modern technology.
          </p>
          <Link to="/about" className="btn-dark w-fit">
            Discover More
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-primary mx-auto mb-8" />
            <p className="text-2xl md:text-3xl text-dark leading-relaxed mb-8">
              "Working with Viswaraj Secure Solutions has been a very different
              experience. I enjoy how they ensured our company's security,
              taking some items more useful for us, presenting them in great
              quality – presented by the trained team."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Client"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-dark">Tom Hanssen</div>
                <div className="text-gray-500">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Trusted By</span>
            <h2 className="section-title text-dark">Our Esteemed Clients</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {companyInfo.clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-primary hover:text-white p-4 text-center text-sm font-medium text-gray-700 transition-all duration-300 flex items-center justify-center min-h-[80px]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="bg-dark py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="border-r-0 md:border-r border-dark-200 pr-0 md:pr-8">
              <p className="text-gray-400 mb-2">
                Do you have questions or
                <br />
                need more info?{" "}
                <span className="text-white font-semibold">contact us</span>
              </p>
            </div>
            <div className="border-r-0 md:border-r border-dark-200 pr-0 md:pr-8">
              <p className="text-gray-400 mb-2">
                Do you want to receive
                <br />a quotation for a project?
                <br />
                <span className="text-white font-semibold">
                  Make an estimate
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Working hours</p>
              <p className="text-white">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-dark-200">
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="text-4xl md:text-5xl font-bold text-primary hover:text-primary-300 transition-colors"
            >
              {companyInfo.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
