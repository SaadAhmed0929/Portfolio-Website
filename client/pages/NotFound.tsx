import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="container py-24 text-center">
      <h1 className="font-pixel text-2xl neon-text">404</h1>
      <p className="mt-4 text-foreground/70">That screen does not exist.</p>
      <div className="mt-6">
        <Link to="/" className="px-4 py-2 rounded bg-accent text-accent-foreground shadow-neon text-xs">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
