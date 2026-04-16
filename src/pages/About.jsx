import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "../data/companyData";
import PageHero from "../components/ui/PageHero";

const About = () => {
  const valueIcons = [Heart, Award, Clock, Zap, Users];

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Learn more about our journey, values, and commitment to excellence"
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* Company Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title text-dark mb-6">
                {companyInfo.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {companyInfo.about.intro}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {companyInfo.about.description}
              </p>
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Building"
                className="w-full"
              />
              {/* Yellow accent */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-dark">
        <div className="grid lg:grid-cols-2">
          {/* Vision */}
          <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-dark-200">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              {companyInfo.about.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="p-12 lg:p-20">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              {companyInfo.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Principles</span>
            <h2 className="section-title text-dark">Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyInfo.about.values.map((value, index) => {
              const Icon = valueIcons[index] || Heart;
              return (
                <div key={index} className="text-center p-6 group">
                  <div className="w-16 h-16 bg-dark group-hover:bg-primary flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-dark mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="grid lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Team Meeting"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-dark-100 p-12 lg:p-20 flex flex-col justify-center">
          <span className="section-label">Our Approach</span>
          <h2 className="section-title-light mb-6">
            Client-Centric
            <br />
            Solutions
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            {companyInfo.about.approach}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {["Assessment", "Design", "Deploy", "Monitor"].map(
              (step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="text-white font-medium">{step}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyInfo.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title text-dark mb-8">
                Delivering Excellence
                <br />
                Through Expertise
              </h2>

              <div className="space-y-4">
                {companyInfo.whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-dark">{item.title}</h4>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Team"
                className="w-full"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="container-custom text-center">
          <h2 className="section-title-light mb-6">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help secure your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
