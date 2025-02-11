'use client';
import { useRouter } from 'next/navigation';

const General: React.FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/')}
      className='text-blue-500 hover:underline'
    >
      {' '}
      <a>back</a>
    </button>
  );
};

export default General;
