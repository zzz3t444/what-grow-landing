import React from "react";
import "../assets/css/font.css";

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-lime-500">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
);

interface PlanCardProps {
  title: string;
  price: string;
  priceDescription?: string;
  description: string;
  features: string[];
  isPro: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, priceDescription, description, features, isPro }) => (
  <div className={`flex mb-8 sm:px-4 md:w-1/2 lg:w-1/4 lg:mb-0`}>
    <div className={`flex flex-grow flex-col p-6 space-y-6 rounded-3xl shadow-lg shadow-lime-400 sm:p-8 ${isPro ? "dark:bg-lime-500 dark:text-gray-50" : "dark:bg-gray-50"}`}>
      <div className="space-y-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-6xl font-bold">
          {price} {priceDescription && <span className="text-sm tracking-wide">{priceDescription}</span>}
        </span>
      </div>
      <p className="leading-relaxed dark:text-gray-600">{description}</p>
      <ul className={`flex-1 space-y-2 ${isPro ? "" : "dark:text-gray-600"}`}>
        {features.map((feature: string, index: number) => (
          <li className="flex items-center space-x-2" key={index}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        rel="noopener noreferrer"
        href="#"
        className={`inline-block w-full px-5 py-3 font-${isPro ? "bold" : "semibold"} tracking-wider text-center rounded ${isPro ? "dark:bg-gray-100 dark:text-lime-500" : "dark:bg-lime-500 dark:text-gray-50"}`}>
        Get Started
      </a>
    </div>
  </div>
);

interface Plan {
  title: string;
  price: string;
  priceDescription?: string;
  description: string;
  features: string[];
  isPro: boolean;
}

const PricingSection: React.FC = () => {
  const plans: Plan[] = [
    {
      title: "Beginner",
      price: "Free",
      description: "Etiam ac convallis enim, eget euismod dolor.",
      features: ["Aenean quis", "Morbi semper", "Tristique enim nec"],
      isPro: false,
    },
    {
      title: "Pro",
      price: "$24",
      priceDescription: "/month",
      description: "Morbi cursus ut sapien sit amet consectetur.",
      features: ["Everything in Free", "Phasellus tellus", "Praesent faucibus", "Aenean et lectus blandit"],
      isPro: true,
    },
    {
      title: "Team",
      price: "$72",
      priceDescription: "/month",
      description: "Phasellus ultrices bibendum nibh in vehicula.",
      features: ["Everything in Pro", "Fusce sem ligula", "Curabitur dictum", "Duis odio eros", "Vivamus ut lectus ex"],
      isPro: false,
    },
  ];

  return (
    <section className="py-20 flex justify-center items-center">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase Monterrat dark:text-lime-500">Pricing</span>
          <h2 className="text-4xl font-semibold lg:text-5xl Montterat tracking-tighter text-white">Choose your best plan</h2>
        </div>
        <div className="flex flex-wrap items-stretch justify-center -mx-4">
          {" "}
          {/* Added justify-center here */}
          {plans.map((plan, index) => (
            <PlanCard key={index} title={plan.title} price={plan.price} priceDescription={plan.priceDescription} description={plan.description} features={plan.features} isPro={plan.isPro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
