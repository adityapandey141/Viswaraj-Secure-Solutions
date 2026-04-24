import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { companyInfo } from "../data/companyData";
import PageHero from "../components/ui/PageHero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: companyInfo.contact.phone,
      link: `tel:${companyInfo.contact.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      content: companyInfo.contact.email,
      link: `mailto:${companyInfo.contact.email}`,
    },
    {
      icon: MapPin,
      title: "Address",
      content: companyInfo.contact.address,
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  const services = [
    { value: "", label: "Select a Service" },
    { value: "security", label: "Security Services" },
    { value: "facility", label: "Facility Management" },
    { value: "risk", label: "Corporate & Risk Solutions" },
    { value: "other", label: "Other Inquiry" },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or support"
        breadcrumbs={[{ name: "Contact" }]}
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className={`p-8 text-center group border-r border-gray-200 last:border-r-0 hover:bg-dark transition-all duration-300 ${index < 2 ? "border-b lg:border-b-0" : ""}`}
              >
                <div className="w-16 h-16 bg-primary group-hover:bg-white flex items-center justify-center mx-auto mb-4 transition-colors">
                  <info.icon className="w-7 h-7 text-dark group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-dark group-hover:text-white mb-2 transition-colors">
                  {info.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm transition-colors">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="grid lg:grid-cols-2">
        {/* Form Section */}
        <div className="bg-gray-100 p-12 lg:p-20">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title text-dark mb-8">Send Us a Message</h2>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-white p-8">
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your message has been sent successfully. We'll contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 transition-all outline-none text-dark placeholder-gray-400"
                    placeholder="Full Name *"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 transition-all outline-none text-dark placeholder-gray-400"
                    placeholder="Phone Number *"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 transition-all outline-none text-dark placeholder-gray-400"
                  placeholder="Email Address *"
                />
              </div>

              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 transition-all outline-none text-dark"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 transition-all outline-none resize-none text-dark placeholder-gray-400"
                  placeholder="Your Message *"
                />
              </div>

              <button type="submit" className="btn-primary">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Map Section */}
        <div className="relative h-[400px] lg:h-auto">
          <iframe
            src={companyInfo.contact.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-400">
                Our team is available 24/7 to address your security needs.
              </p>
            </div>
            <div className="text-left md:text-right">
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="text-4xl md:text-5xl font-bold text-primary hover:text-primary-300 transition-colors"
              >
                {companyInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
