import React, { useState } from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const faqs = [
  {
    question: "What is RTI and who can file it?",
    answer: "RTI (Right to Information) is a fundamental right under the RTI Act 2005 that allows any Indian citizen to request information from public authorities. You can file RTI applications to seek information about government activities, decisions, public expenditure, and services provided by Jammu and Kashmir government departments.",
  },
  {
    question: "How long does it take to receive a response?",
    answer: "As per the RTI Act, the concerned Public Information Officer (PIO) must provide information within 30 days from the date of receipt.",
  },
  {
    question: "Do I need to visit any government office to file RTI?",
    answer: "No. The RTI filing process can be completed fully online with assistance from FileMyRTI. We handle all the paperwork, submission, and fee payment for you without requiring you to visit any government office.",
  },
  {
    question: "Which Jammu and Kashmir departments can I file RTI applications for?",
    answer: "You can file RTI applications for all Jammu and Kashmir Government departments including General Administration, Home, Finance, Revenue, School Education, Higher Education, Health & Medical Education, Public Works (R&B), Power Development, Jal Shakti, Agriculture, Forest & Environment, Industries & Commerce, Tourism, Housing & Urban Development, Rural Development & Panchayati Raj, Social Welfare, Labour & Employment, Transport, and many more.",
  },
  {
    question: "What documents do I need to file an RTI?",
    answer: "For filing an RTI in Jammu and Kashmir, you primarily need to clearly describe the information you're seeking. No identity proof is mandatory for filing, but having Aadhaar or voter ID helps for communication purposes. For BPL fee exemption, you'll need your BPL card.",
  },
  {
    question: "Can I file RTI anonymously?",
    answer: "Yes, we offer anonymous RTI filing services for Jammu and Kashmir departments where your identity is protected throughout the process. Our team files the application on behalf of our organization, ensuring your privacy while exercising your right to information.",
  },
];

export const RajasthanEnhancedFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#E0EDF5' }}>
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">
              Got Questions? We Have Answers
            </h2>
            <p className="text-base md:text-lg font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about RTI filing in Jammu and Kashmir
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={500 + index * 50}>
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-5 animate-fadeIn" role="region">
                    <p className="text-gray-600 font-normal leading-relaxed">{faq.answer}</p>
                  </div>
                )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

