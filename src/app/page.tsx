import scss from './homepage.module.scss';

import HomeHero from '@components/HomeHero/HomeHero';
import GalleryTeaser from '@components/GalleryTeaser/GalleryTeaser';
import BlogTeaser from '@components/BlogTeaser/BlogTeaser';
import CtaBanner from '@components/CtaBanner/CtaBanner';
import Testimonial from '@components/Testimonial/Testimonial';

type Props = {};

export default async function Home({}: Props) {
  return (
    <main className={scss.homepage}>
      <HomeHero />

      <GalleryTeaser
        headerTitle={'Portfolio'}
        headerText={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ut.'
        }
      />

      <BlogTeaser />

      <Testimonial />

      <CtaBanner
        title={'Are you ready to collaborate?'}
        text={'Claim your FREE 20-minute strategy call now!'}
        btnText={'Click Here'}
        image={
          'https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg'
        }
        altText={'alt text'}
      />
    </main>
  );
}
