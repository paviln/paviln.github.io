import classNames from 'classnames';

type Props = {
  href: string;
  children?: React.ReactNode;
  className: string;
};

const Plane = ({ href, children, className }: Props) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-1',
        'place-content-center',
        'transition',
        'ease-in-out',
        'duration-300',
        'hover:opacity-75',
        className
      )}
    >
      <div className='place-self-center'>
        <a href={href} className='text-4xl origin-center -rotate-90 flex-1'>
          {children}
        </a>
      </div>
    </div>
  );
};

export default Plane;
