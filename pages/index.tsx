import type { NextPage } from 'next';
import Plane from '../components/Menu/Plane';

const Home: NextPage = () => {
  return (
    <div className='flex'>
      <Plane
        href='https://github.com/paviln?tab=repositories'
        className='bg-lime-700'
      >
        Projects
      </Plane>
      <Plane href='https://www.linkedin.com/in/paviln/' className='bg-cyan-600'>
        About
      </Plane>
      <Plane href='paviln@outlook.dk' className='bg-fuchsia-800'>
        Contact
      </Plane>
      <Plane href='' className='bg-red-800'></Plane>
    </div>
  );
};

export default Home;
