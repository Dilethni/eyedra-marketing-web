import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative isolate ">
      {/* Background video without opacity */}
      <div className="absolute inset-0 -z-10 h-[100vh] max-h-[700px]">
        <video
          className="w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="bg-video-001.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute inset-0 opacity-30"></div> {/* Changed from opacity-60 to opacity-30 */}
      </div>

      {/* Hero section */}
      <div className="relative flex flex-col justify-center items-center text-center h-[100vh] max-h-[700px]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text tracking-tight text-transparent sm:text-6xl">
                Your Mental Well-being
                <span className="block font-bold bg-gradient-to-r from-primary-900 to-secondary-900 bg-clip-text text-transparent">
                  Matters Most
                </span>
              </h1>
              <p className="mt-6 text-lg font-bold leading-8 text-blue-900">
                Step into the world of EYEDRA, where cutting-edge technology and heartfelt emotional support come together. 
                Connect with others, share your journey, and discover the strength of a safe, compassionate community.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 sm:text-6xl">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
              Everything you need for your mental well-being
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              EYEDRA provides a comprehensive suite of tools and features designed to support your mental health journey.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="flex flex-col p-6 bg-white/90 border rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-blue-100  hover:to-pink-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Download section */}
      <div className="mx-auto mt-16 mb-16 max-w-7xl sm:mt-24 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white/90 border rounded-lg px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 
            transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-3xl hover:bg-gradient-to-r hover:from-blue-100  hover:to-pink-100">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 sm:text-4xl">
            Download EYEDRA Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Take the first step towards better mental well-being. Download our app and join a community that cares.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-lg hover:from-primary-500 hover:to-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Download APK
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

const features = [
  {
    name: 'Virtual Campfire Sessions',
    description: 'Join intimate group discussions where you can share experiences and find support in a safe, moderated environment.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: 'AI Companion',
    description: 'Access our AI-powered virtual companion anytime for emotional support, guidance, and a listening ear.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    name: 'Community Spaces',
    description: 'Connect with others who share similar experiences in our themed community spaces.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];
