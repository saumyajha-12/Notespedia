// import React from 'react'
// import { Star, Quote } from 'lucide-react'

// const Reviews = () => {
//   const reviews = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       branch: "Computer Science Engineering",
//       semester: 6,
//       rating: 5,
//       comment: "Notespedia has been a game-changer for my studies! The quality of notes available here is exceptional, and I've been able to find resources for all my subjects. The upload process is also very smooth.",
//       avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//     },
//     {
//       id: 2,
//       name: "Rahul Kumar",
//       branch: "Mechanical Engineering",
//       semester: 4,
//       rating: 5,
//       comment: "Amazing platform! I've downloaded so many helpful notes and also contributed my own. The community here is very supportive and the notes are well-organized by branch and semester.",
//       avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//     },
//     {
//       id: 3,
//       name: "Ananya Patel",
//       branch: "Electronics and Communication",
//       semester: 7,
//       rating: 5,
//       comment: "The best part about Notespedia is how easy it is to find exactly what you need. The search and filter features work perfectly, and I love how I can contribute back to the community.",
//       avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//     },
//     {
//       id: 4,
//       name: "Vikram Singh",
//       branch: "Civil Engineering",
//       semester: 5,
//       rating: 4,
//       comment: "Great resource for engineering students! The notes are comprehensive and have helped me understand complex topics. The rating system ensures you get quality content.",
//       avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//     },
//     {
//       id: 5,
//       name: "Sneha Reddy",
//       branch: "Information Technology",
//       semester: 3,
//       rating: 5,
//       comment: "I've been using Notespedia for over a year now, and it's incredible how much it has helped my academic performance. The peer-to-peer learning approach is brilliant!",
//       avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//     },
//     {
//       id: 6,
//       name: "Arjun Mehta",
//       branch: "Electrical Engineering",
//       semester: 8,
//       rating: 5,
//       comment: "As a final year student, I can say that Notespedia has been with me throughout my journey. The quality of notes and the supportive community make it stand out from other platforms.",
//       avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//     }
//   ]

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={`h-4 w-4 ${
//           index < rating
//             ? 'text-yellow-400 fill-current'
//             : 'text-gray-300 dark:text-gray-600'
//         }`}
//       />
//     ))
//   }

//   return (
//     <section id="reviews" className="py-16 bg-white dark:bg-gray-800 transition-colors">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             What Students Say About Us
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Join thousands of satisfied students who have transformed their learning experience with Notespedia
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={review.avatar}
//                   alt={review.name}
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-gray-900 dark:text-white">
//                     {review.name}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {review.branch}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-500">
//                     Semester {review.semester}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center mb-3">
//                 <div className="flex space-x-1 mr-2">
//                   {renderStars(review.rating)}
//                 </div>
//                 <span className="text-sm text-gray-600 dark:text-gray-400">
//                   {review.rating}.0
//                 </span>
//               </div>

//               <div className="relative">
//                 <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200 dark:text-blue-800" />
//                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
//                   {review.comment}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//               Join Our Community Today!
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-6">
//               Be part of the largest student community sharing knowledge and helping each other succeed.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/signup"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
//               >
//                 Sign Up Now
//               </a>
//               <a
//                 href="/browse"
//                 className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-semibold"
//               >
//                 Browse Notes
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Reviews

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
