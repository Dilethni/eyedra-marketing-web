import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative isolate pt-24">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">EYEDRA</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            EYEDRA was born from a simple yet powerful idea: everyone deserves access to mental health support in a safe,
            understanding environment. Our platform combines the power of community with innovative technology to create
            a space where mental well-being comes first.
          </p>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              To make mental health support accessible, engaging, and effective through technology and community connection.
              We believe in creating a world where no one has to face mental health challenges alone.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-8">
              A world where mental health support is readily available, stigma-free, and integrated seamlessly into daily life.
              We envision EYEDRA as the bridge between technology and emotional well-being.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Empathy First</h3>
                <p className="text-gray-600">Every feature and interaction is designed with empathy and understanding.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Safe Space</h3>
                <p className="text-gray-600">We maintain a secure and judgment-free environment for all users.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Leveraging technology to enhance mental health support and accessibility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Building connections and fostering a supportive community environment.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}