import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22.675 0h-21.35c-0.733 0-1.325 0.592-1.325 1.325v21.351c0 0.733 0.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463 0.099 2.794 0.143v3.24l-1.918 0.001c-1.504 0-1.794 0.715-1.794 1.763v2.312h3.587l-0.467 3.622h-3.12v9.294h6.116c0.733 0 1.325-0.591 1.325-1.324v-21.351c0-0.733-0.592-1.325-1.325-1.325z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/eyedraofficial',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2.2c3.2 0 3.6 0 4.9 0.1 1.2 0.1 2.3 0.5 3.1 1.3 0.8 0.8 1.2 1.9 1.3 3.1 0.1 1.3 0.1 1.7 0.1 4.9s0 3.6-0.1 4.9c-0.1 1.2-0.5 2.3-1.3 3.1-0.8 0.8-1.9 1.2-3.1 1.3-1.3 0.1-1.7 0.1-4.9 0.1s-3.6 0-4.9-0.1c-1.2-0.1-2.3-0.5-3.1-1.3-0.8-0.8-1.2-1.9-1.3-3.1-0.1-1.3-0.1-1.7-0.1-4.9s0-3.6 0.1-4.9c0.1-1.2 0.5-2.3 1.3-3.1 0.8-0.8 1.9-1.2 3.1-1.3 1.3-0.1 1.7-0.1 4.9-0.1m0-2.2c-3.3 0-3.7 0-5 0.1-1.4 0.1-2.7 0.5-3.7 1.5-1 1-1.4 2.3-1.5 3.7-0.1 1.3-0.1 1.7-0.1 5s0 3.7 0.1 5c0.1 1.4 0.5 2.7 1.5 3.7 1 1 2.3 1.4 3.7 1.5 1.3 0.1 1.7 0.1 5 0.1s3.7 0 5-0.1c1.4-0.1 2.7-0.5 3.7-1.5 1-1 1.4-2.3 1.5-3.7 0.1-1.3 0.1-1.7 0.1-5s0-3.7-0.1-5c-0.1-1.4-0.5-2.7-1.5-3.7-1-1-2.3-1.4-3.7-1.5-1.3-0.1-1.7-0.1-5-0.1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zM12 15.6c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zM18.4 4.6c-0.8 0-1.4 0.6-1.4 1.4s0.6 1.4 1.4 1.4 1.4-0.6 1.4-1.4-0.6-1.4-1.4-1.4z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} EYEDRA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}