import Image from 'next/image';
import scss from './homeHero.module.scss';
import AnimatedLogo from '../../assets/svg/rooted.svg';

type Props = {};

export default function HomeHero({}: Props) {
  return (
    <section className={scss.homeHero}>
      <div className={scss.image}>
        <Image
          src={
            'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg'
          }
          alt={'alt text'}
          width={1600}
          height={100}
        />
        <div className={scss.animatedLogo}>
          <AnimatedLogo />
        </div>
      </div>
      <div className={scss.content}>
        <p>
          We are a photography business with a single goal in mind:
          <br />
          Preserving Memories, Perfecting Moments
        </p>
        <button type='button'>Book Your Shoot Now</button>
      </div>
    </section>
  );
}
