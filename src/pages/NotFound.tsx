import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center">
        <p className="text-blue-600 font-semibold mb-4">404 ERROR</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
