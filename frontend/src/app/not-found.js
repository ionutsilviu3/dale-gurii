import { redirect } from 'next/navigation';

const NotFound = () => {
  // This will redirect to the home page immediately
  redirect('/');
};

export default NotFound;
