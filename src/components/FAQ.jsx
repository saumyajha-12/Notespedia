import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]))

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqs = [
    {
      question: "How do I upload notes to Notespedia?",
      answer: "After creating an account and signing in, click the 'Upload' button in the navigation bar. Fill out the form with your note details including title, description, branch, semester, and subject. Then select your file (PDF, DOC, DOCX, or TXT up to 10MB) and click 'Upload Notes'."
    },
    {
      question: "What file formats are supported for uploads?",
      answer: "We support PDF, DOC, DOCX, and TXT files. The maximum file size allowed is 10MB to ensure quick downloads and optimal performance."
    },
    {
      question: "How can I find notes for my specific subject and semester?",
      answer: "Use the search bar on the Browse page to search by keywords, or use the filter options to narrow down by branch and semester. You can also browse through the categorized sections to find notes relevant to your studies."
    },
    {
      question: "Is Notespedia free to use?",
      answer: "Yes! Notespedia is completely free for students. You can browse, download, and upload notes without any charges. Our mission is to make quality education resources accessible to everyone."
    },
    {
      question: "How do I rate and review notes?",
      answer: "After downloading notes, you can rate them using the star rating system and leave a review to help other students. Your feedback helps maintain the quality of content on our platform."
    },
    {
      question: "Can I edit my profile information after signing up?",
      answer: "Absolutely! Go to your Profile page and click the 'Edit' button to update your information including your name, branch, semester, and college details."
    },
    {
      question: "What should I do if I encounter technical issues?",
      answer: "If you experience any technical problems, please contact our support team through the Contact page. Provide details about the issue you're facing, and we'll help resolve it as quickly as possible."
    },
    {
      question: "How do I ensure my uploaded notes are of good quality?",
      answer: "Make sure your notes are clear, well-organized, and relevant to the subject. Include a descriptive title and detailed description. High-quality notes receive better ratings and help more students in their studies."
    }
  ]

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about using Notespedia
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                {openItems.has(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ