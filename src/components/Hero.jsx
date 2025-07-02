// import React from 'react'
// import { Link } from 'react-router-dom'
// import { BookOpen, Users, Upload, Star } from 'lucide-react'

// const Hero = () => {
//   const stats = [
//     { icon: BookOpen, label: 'Notes Available', value: '10,000+' },
//     { icon: Users, label: 'Active Students', value: '5,000+' },
//     { icon: Upload, label: 'Daily Uploads', value: '500+' },
//     { icon: Star, label: 'Average Rating', value: '4.8' },
//   ]

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
//             Your Ultimate
//             <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Study Companion
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Access thousands of study notes, share your knowledge, and excel in your academic journey. 
//             Join the largest community of students helping each other succeed.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//             <Link
//               to="/browse"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               Browse Notes
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               Join Community
//             </Link>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
//                   <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
//                   <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-600 text-sm md:text-base">
//                     {stat.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Features Section */}
//           <div className="grid md:grid-cols-3 gap-8 text-left">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
//               <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//                 <BookOpen className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 Organized by Branch & Semester
//               </h3>
//               <p className="text-gray-600">
//                 Find notes perfectly categorized by your branch and semester. Quick access to exactly what you need.
//               </p>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
//               <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//                 <Users className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 Peer-to-Peer Learning
//               </h3>
//               <p className="text-gray-600">
//                 Learn from your peers, share your knowledge, and build a stronger academic community together.
//               </p>
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
//               <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//                 <Star className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 Quality Reviews
//               </h3>
//               <p className="text-gray-600">
//                 Rate and review notes to help others find the best study materials. Quality guaranteed by the community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero



import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Upload, Star } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: BookOpen, label: 'Notes Available', value: '10,000+' },
    { icon: Users, label: 'Active Students', value: '5,000+' },
    { icon: Upload, label: 'Daily Uploads', value: '500+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-100 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Your Ultimate
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Study Companion
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Access thousands of study notes, share your knowledge, and excel in your academic journey.
            Join the largest community of students helping each other succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/browse"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse Notes
            </Link>
            <Link
              to="/signup"
              className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Community
            </Link>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Organized by Branch & Semester
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find notes perfectly categorized by your branch and semester. Quick access to exactly what you need.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Peer-to-Peer Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from your peers, share your knowledge, and build a stronger academic community together.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality Reviews
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rate and review notes to help others find the best study materials. Quality guaranteed by the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
