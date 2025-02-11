import Image from 'next/image';
import StepIcon from '@/components/StepIcon/page';

import { TbArrowsMinimize } from 'react-icons/tb';

import snake from '../../public/snake.png';

import plane from '../../public/icons/plane.png';
import page from '../../public/icons/page.png';
import light from '../../public/icons/light.png';
import graph from '../../public/icons/graph.png';
import note from '../../public/icons/note.png';
import map from '../../public/icons/map.png';
import rocket from '../../public/icons/rocket.png';
import party from '../../public/icons/party.png';

export default function Home() {

    const icons = [
    {
      icon: plane,
      height: 45,
      position: '',
      divider:
        'sm:h-[1.5rem] md:h-[2.5rem] lg:h-[3.5rem] xl:h-[4.5rem] 2xl:h-[7rem] left-[47%]',
    },
    {
      icon: page,
      height: 82.5,
      position: 'left-[15%]',
      divider:
        'sm:h-[2.5rem] md:h-[3.5rem] lg:h-[4rem] xl:h-[5rem] 2xl:h-[6.5rem] left-[47%]',
    },
    {
      icon: light,
      height: 60,
      position: 'left-[27.5%]',
      divider:
        'sm:h-[3rem] md:h-[4rem] lg:h-[4.5rem] xl:h-[5rem] 2xl:h-[7rem] left-[47%]',
    },
    {
      icon: graph,
      height: 37.5,
      position: 'left-[36.5%]',
      divider:
        'sm:h-[3rem] md:h-[4rem] lg:h-[4.5rem] xl:h-[5rem] 2xl:h-[7rem] left-[47%]',
    },
    {
      icon: note,
      height: 30,
      position: 'left-[50%]',
      divider:
        'sm:h-[2rem] md:h-[2.5rem] lg:h-[3.5rem] xl:h-[5rem] 2xl:h-[7rem] left-[47%]',
    },
    {
      icon: map,
      height: 90,
      position: 'left-[61.5%]',
      divider:
        'sm:h-[2rem] md:h-[3rem] lg:h-[4.5rem] xl:h-[5rem] 2xl:h-[8rem] left-[47%]',
    },
    {
      icon: rocket,
      height: 70,
      position: 'left-[78.5%]',
      divider:
        'sm:h-[2rem] md:h-[4rem] lg:h-[5rem] xl:h-[5rem] 2xl:h-[7rem] left-[47%]',
    },
    {
      icon: party,
      height: 100,
      position: 'left-[90%]',
      divider:
        'sm:h-[2rem] md:h-[2rem] lg:h-[4rem] xl:h-[5rem] 2xl:h-[7rem] left-[48.5%] sm:-bottom-[25%] md:-bottom-[12.5%] lg:-bottom-[35%] xl:-bottom-[35%] 2xl:-bottom-[42.5%]',
    },
  ];

  return (
    <div className='flex h-full w-full bg-[#FFFFFF] pb-4 pl-2 pr-6 pt-2'>
      <main className='flex h-full max-h-[30rem] min-h-[25rem] w-full flex-col items-end justify-between overflow-hidden overflow-y-auto rounded-2xl bg-[#F3F3F3] p-6 sm:max-h-[35rem] sm:min-h-[30rem] md:max-h-[40rem] md:min-h-[35rem] lg:max-h-[45rem] lg:min-h-[40rem] xl:max-h-[50rem] xl:min-h-[40rem] 2xl:max-h-[55rem] 2xl:min-h-[50rem]'>
        <div className='flex max-w-[250px] flex-row items-start justify-start text-center'>
          <section className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>Celebrate</h1>
            <p className='break-words text-base/5 text-zinc-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </section>

          <button className='p-2 text-xl transition duration-150 hover:scale-110'>
            <TbArrowsMinimize />
          </button>
        </div>
        <div className='relative mx-auto w-[80%]'>
          <Image
            src={snake}
            alt='timeline'
            className='relative z-20 h-auto w-full'
          />
          {icons.map((item, index) => (
            <StepIcon
              key={index}
              icon={item.icon}
              height={item.height}
              position={item.position}
              divider={item.divider}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
