import { motion } from 'framer-motion';

const services = [
  {
    title: 'Virtual Campfire Sessions',
    description: 'Join intimate group discussions led by experienced moderators. Share your experiences, listen to others, and find support in a safe environment.',
    features: [
      'Small group settings (5-10 people)',
      'Themed discussions',
      'Professional moderation',
      'Anonymous participation option'
    ]
  },
  {
    title: 'AI Companion',
    description: 'Access our AI-powered virtual companion anytime for emotional support and guidance. Available 24/7 to listen and provide coping strategies.',
    features: [
      'Available 24/7',
      'Personalized responses',
      'Guided meditation sessions',
      'Progress tracking'
    ]
  },
  {
    title: 'Community Spaces',
    description: 'Connect with others who share similar experiences in our themed community spaces. Build lasting connections and support networks.',
    features: [
      'Interest-based groups',
      'Moderated discussions',
      'Resource sharing',
      'Community events'
    ]
  }
];

export default function Services() {
  return (
    <div className="relative isolate pt-24">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Mental Health Support
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              EYEDRA offers a range of services designed to support your mental well-being journey,
              combining technology with human connection.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-x-8 gap-y-16 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}