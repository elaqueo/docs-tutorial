import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      click&nbsp;
      <Link
        href="documents/123"
        className="text-blue-500 underline"
      >
        here
      </Link>
      &nbsp;to go to document id
    </div>
  );
};

export default Home;
