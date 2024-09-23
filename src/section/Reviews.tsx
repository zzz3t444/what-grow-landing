import React from "react";
import '../assets/css/font.css'

const testimonials = [
  {
    name: "Brotzky",
    handle: "@brotzky_",
    image: "https://via.placeholder.com/50", 
    text: `Just got access to @basehub_ai...!
      Even in alpha, you know this is going to be special.
      We currently use Sanity and previously Contentful — but now I want to use Basehub.`,
  },
  {
    name: "Guillermo Rauch",
    handle: "@rauchg",
    image: "https://via.placeholder.com/50",
    text: `A document with an API.
      Content modeling and a Notion-like block editing experience in one.`,
  },
  {
    name: "Jayzers",
    handle: "@jayzersdotdev",
    image: "https://via.placeholder.com/50",
    text: `The quality of the UI, the amount of features that @basehub_ai delivers so fast is crazyyy.`,
  },
  {
    name: "Evan Stewart",
    handle: "@heyecs",
    image: "https://via.placeholder.com/50",
    text: `I can’t get over how insanely easy it is to scaffold large stores of content with @basehub_ai. 
      DX is top-notch… highly recommended!`,
  },
  {
    name: "Michelle Bakels",
    handle: "@MichelleBakels",
    image: "https://via.placeholder.com/50",
    text: `The full @ReactMiamiConf speaker lineup was announced today! All content was prepared and pushed to prod in one push with @basehub_ai. What was once a very stressful day went flawlessly.`,
  },
  {
    name: "Steven Tey",
    handle: "@steventey",
    image: "https://via.placeholder.com/50",
    text: `If you're looking for a CMS in 2024, @basehub_ai is a breath of fresh air over archaic incumbents like Contentful:
      AI-native experience (create blocks using natural language)
      E2E typesafety (auto-generated types from your repo)
      Optimistic UI (changes are auto-saved).`,
  },
];

const TestimonialCard: React.FC<{
  name: string;
  handle: string;
  image: string;
  text: string;
}> = ({ name, handle, image, text }) => {
  return (
    <div className="bg-[#161616] text-white border border-neutral-800 p-6 rounded-xl shadow-md flex flex-col">
      <div className="flex items-center mb-4">
        <img className="w-12 h-12 rounded-full mr-4" src={image} alt={`${name} profile`} />
        <div>
          <h4 className="font-semibold Manrope">{name}</h4>
          <p className="text-sm text-gray-400 Roboto">{handle}</p>
        </div>
      </div>
      <p className="text-sm font-normal mt-3 text-neutral-400 Roboto">{text}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="bg-black py-16 px-8 mt-32">
      <h2 className="text-center text-3xl font-normal text-white mb-3 tracking-tighter Manrope">What People Are Saying</h2>
      <p className="text-center text-gray-400 mb-10">
        <a href="#" className="underline">
          Follow us on X
        </a>{" "}
        to join the conversation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} name={testimonial.name} handle={testimonial.handle} image={testimonial.image} text={testimonial.text} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
