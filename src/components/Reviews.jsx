
import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Saumya Prakash',
      branch: 'Electronics and Communication',
      semester: 5,
      rating: 5,
      comment:
        'Great resource for engineering students! The notes are comprehensive and have helped me understand complex topics. The rating system ensures you get quality content.',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ir_V_7-zJtbO-1oUwwwk1hgM5PFEBCeR1A&s'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      branch: 'Computer Science Engineering',
      semester: 6,
      rating: 5,
      comment:
        "Notespedia has been a game-changer for my studies! The quality of notes available here is exceptional, and I've been able to find resources for all my subjects. The upload process is also very smooth.",
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Kashish Kumar',
      branch: 'Computer Science Engineering',
      semester: 4,
      rating: 5,
      comment:
        'Amazing platform! I\'ve downloaded so many helpful notes and also contributed my own. The community here is very supportive and the notes are well-organized by branch and semester.',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Saranya Suri',
      branch: 'Electrical Engineering',
      semester: 3,
      rating: 4,
      comment:
        'The best part about Notespedia is how easy it is to find exactly what you need. The search and filter features work perfectly, and I love how I can contribute back to the community.',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      branch: 'Civil Engineering',
      semester: 3,
      rating: 5,
      comment:
        "I've been using Notespedia for over a year now, and it's incredible how much it has helped my academic performance. The peer-to-peer learning approach is brilliant!",
      avatar:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      branch: 'Electrical Engineering',
      semester: 8,
      rating: 5,
      comment:
        'As a final year student, I can say that Notespedia has been with me throughout my journey. The quality of notes and the supportive community make it stand out from other platforms.',
      avatar:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ]

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(showNext, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Students Say About Us</h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Real feedback from real users who love Notespedia.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={showPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white p-2 rounded-full z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(reviews.length / 3) * 100}%`
              }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-1/3 px-4 flex-shrink-0">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{review.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{review.branch}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Semester {review.semester}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">{renderStars(review.rating)}</div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm flex-grow">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white p-2 rounded-full z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews
