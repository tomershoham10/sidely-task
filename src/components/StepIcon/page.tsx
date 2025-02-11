import Image, { StaticImageData } from 'next/image';

export interface StepIconProps {
  icon: StaticImageData;
  height: number;
  position: string;
  divider: string;
}

const StepIcon: React.FC<StepIconProps> = (props) => {
  const { icon, height, position, divider } = props;
  return (
    <section
      style={{ bottom: `${height}%` }}
      className={`absolute h-fit ${position}`}
    >
      <button>
        <Image
          src={icon}
          className='relative z-30 transition duration-150 hover:scale-110'
          alt='icon'
        />
      </button>
      <div
        className={`absolute left-1/2 z-10 w-0.5 -translate-x-1/2 transform border-l-2 border-dotted border-gray-300 ${divider}`}
      ></div>
    </section>
  );
};

export default StepIcon;
