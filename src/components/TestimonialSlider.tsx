import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ujjwal",
    position: "Project Collaborator",
    company: "Wordstormer",
    comment: "I’ve worked with a lot of writers, but Yawar stood out. He never once missed a timeline, and somehow, every conversation with him left me feeling clearer about the project. He’s one of those rare people who actually pay attention-not just to words, but to what’s between the lines too",
    image: "https://i.ibb.co/1twmG3yQ/Ujjwal.jpg"
  },
  {
    id: 2,
    name: "Shohini Ghosh",
    position: "Co-Founder",
    company: "Thrive Togethe",
    comment: "Yawar was a huge support when I needed to create structured, high-quality course content for three of my clients - he just got what I wanted. He also worked on GEO for my website, and honestly, the bounce rate dropped way more than I expected. Super reliable and easy to brainstorm with.",
    image: "https://i.ibb.co/W4nTHXs7/Shohini-Maam.jpg"
  },
  {
    id: 3,
    name: "Megan Wu",
    position: " Sr. SEO Executive ",
    company: "iToolab AnyGo",
    comment: "Our partnership with Yawar started with just a few blogs, but he quickly became someone we could trust with PR, deep-dive research, and more. His work barely needs revisions he- just gets it. Super professional, always meets deadlines, and never once said ‘no’ to a task, no matter how last-minute.",
    image: "https://i.ibb.co/cKKb8x8H/Megan-Wu.jpg"
  },
  {
    id: 4,
    name: "Mukul",
    position: "Digital Marketer",
    company: "Digital Kranti",
    comment: "I approached Yawar on LinkedIn when I needed someone who could write and translate content without complicating things. He helped us turn our blogs into natural-sounding Hinglish and wrote a few SEO pieces that actually ranked on page 1. His content planning for our ed-tech projects really brought clarity.",
    image: "https://i.ibb.co/21BVWSb8/Mukul.jpg"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative overflow-hidden bg-gray-900 py-24">
      <div 
        className="container mx-auto px-6 max-w-6xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold mb-6 block">TESTIMONIALS</span>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real feedback from real clients who have transformed their digital presence.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Card */}
              <div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500"
                style={{ opacity: 1 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 md:w-3/5">
                    <div className="text-4xl text-blue-600 mb-6">"</div>
                    <p className="text-xl text-gray-600 mb-8 italic">
                      {testimonials[currentIndex].comment}
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-blue-600 font-semibold">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-blue-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;