import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-16 bg-background">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
          Thank You!
        </h1>
        <p className="text-grayText text-lg mb-8 font-medium">
          Your message has been received. I'll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background rounded-lg font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;