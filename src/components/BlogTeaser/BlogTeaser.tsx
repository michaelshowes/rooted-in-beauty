import Card from '@components/Card/Card';
import SectionHeader from '@components/SectionHeader/SectionHeader';
import scss from './blogTeaser.module.scss';

type Props = {};

export default function BlogTeaser({}: Props) {
  return (
    <section className={scss.blogTeaser}>
      <div className={scss.inner}>
        <SectionHeader
          title={'Blog'}
          text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
        />
        <div className={scss.teaserCards}>
          <Card
            title={'Blog Title #1'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit suscipit molestias, voluptatibus dolores doloremque harum architecto aperiam pariatur ullam necessitatibus, fugiat laborum. Aperiam ipsam, deserunt molestias unde quaerat sit?'
            }
            url={'/'}
            image={
              'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg'
            }
            altText={'blog teaser image'}
            width={300}
            height={300}
          />
          <Card
            title={'Blog Title #2'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit suscipit molestias, voluptatibus dolores doloremque harum architecto aperiam pariatur ullam necessitatibus, fugiat laborum. Aperiam ipsam, deserunt molestias unde quaerat sit?'
            }
            url={'/'}
            image={
              'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg'
            }
            altText={'blog teaser image'}
            width={300}
            height={300}
          />
          <Card
            title={'Blog Title #3'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit suscipit molestias, voluptatibus dolores doloremque harum architecto aperiam pariatur ullam necessitatibus, fugiat laborum. Aperiam ipsam, deserunt molestias unde quaerat sit?'
            }
            url={'/'}
            image={
              'https://images.pexels.com/photos/2179205/pexels-photo-2179205.jpeg'
            }
            altText={'blog teaser image'}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
