import React from "react";
import { Testimonials } from "./ui/testimonials";

type ShadcnTestimonial = {
  image: string;
  text: string;
  name: string;
  username: string;
  social?: string;
};

const Real_Testimonials = () => {
  // Photos available in your current codebase:
  // - Mohamed / Chau are tied to the video cards (keep as-is).
  // For the written testimonials below, you did NOT provide matching photos.
  // Per your rule, these stay at the end of the list and use a neutral placeholder image.

  const PLACEHOLDER_IMAGE =
    "https://images.unsplash.com/photo-1500648767791-842f9a56d7f4?auto=format&fit=crop&w=200&q=60";

  // IMPORTANT: Do not change any text below. Must remain 100% identical.
  const realWrittenTestimonials: ShadcnTestimonial[] = [
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "I spent half a year at INTERLINK, and my English improved a lot, which makes me feel that I am ready to enter my MBA program in the future.",
      name: "Tingting Wang",
      username: "China",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "\"They stimulate your learning by offering you a friendly environment in which you can develop your own ideas [and] interact with people from different cultures.\"",
      name: "Berta",
      username: "Brazil",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "When I arrived here I wasn’t able to write one paragraph in English, but now I can write an essay in three or four pages and that’s fantastic.",
      name: "Bader",
      username: "UAE",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "This program is like a gate for international students. It helped me accomplish my goals when I was at the university... I made good friends, the social environment was motivating, and there were extra activities.",
      name: "Luis Sandoval",
      username: "El Salvador",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "The teachers at INTERLINK are truly amazing, professional, enthusiastic, and dedicated. They concentrate on your individual needs and help you improve your speaking, listening, reading, and writing.",
      name: "Concha Muñoz",
      username: "Spain",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "INTERLINK’s teachers cared about my success, and they made sure I was prepared for life in university.",
      name: "Theophilus Twum-Barima",
      username: "Ghana",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "When I joined INTERLINK, I improved my writing and speaking skills. Now, I am finishing my master's program in industrial engineering with a very high GPA. Recently, I got accepted into a Ph.D. program at the same university. These programs would not have been possible for me without the high level of English INTERLINK helped me obtain.",
      name: "Ayman",
      username: "Saudi Arabia",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "Thanks to INTERLINK, I can comfortably communicate with Americans as well as with foreign people.",
      name: "Mariana",
      username: "Ecuador",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "The intensive program at Interlink gave me the opportunity to be better than a lot of international students at the university, because at Interlink the faculties helped me to be prepared for the intensive work that I might face at the university.",
      name: "Wesmi Alwesmi",
      username: "Saudi Arabia",
      social: "https://twitter.com",
    },
    {
      image: PLACEHOLDER_IMAGE,
      text:
        "This program helped me a lot. I suggest people who want to go to college in the U.S. go to INTERLINK first, even if they have already passed the TOEFL.",
      name: "Toni",
      username: "Bosnia",
      social: "https://twitter.com",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-6">
          What Our Students Say
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          Hear from students who improved their English with INTERLINK.
        </p>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Video 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/WzvHP99gpBc"
                title="Student Testimonial - Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://i.imgur.com/pg4XxDm.png"
                  alt="Mohamed"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-[#064088]">Mohamed</h3>
                  <p className="text-sm text-gray-600">Saudi Arabia</p>
                </div>
              </div>
              <p className="text-gray-700">
                "At that time when I started I had a really strong accent and
                comparing to myself now and back then, it's just unbelievable."
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MBqWwl6C7Us"
                title="Student Testimonial - Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://i.imgur.com/bQLjGzi.png"
                  alt="Chau"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-[#064088]">Chau</h3>
                  <p className="text-sm text-gray-600">Vietnam</p>
                </div>
              </div>
              <p className="text-gray-700">
                "After taking the course at INTERLINK I feel more confident and
                I can communicate with others and others can understand what I
                say."
              </p>
            </div>
          </div>
        </div>

        {/* Written Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
            More Students
          </h3>
          <Testimonials
            testimonials={realWrittenTestimonials}
            title=""
            description="Read real testimonials from students who improved their English with INTERLINK."
          />
        </div>
      </div>
    </section>
  );
};

export default Real_Testimonials;