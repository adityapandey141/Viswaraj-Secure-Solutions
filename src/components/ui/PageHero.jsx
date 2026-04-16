import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageHero = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
      {/* Yellow Accent Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary transform skew-x-[-12deg] translate-x-1/4 hidden lg:block" />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link
              to="/"
              className="text-gray-500 hover:text-primary transition-colors uppercase tracking-wider text-xs"
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-600" />
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="text-gray-500 hover:text-primary transition-colors uppercase tracking-wider text-xs"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-primary uppercase tracking-wider text-xs">
                    {crumb.name}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
