import scss from './galleryTeaser.module.scss';
import Image from 'next/image';
import SectionHeader from '@components/SectionHeader/SectionHeader';
import Link from 'next/link';

// Sample image data
const images = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/4668566/pexels-photo-4668566.jpeg',
    alt: 'Woman sitting in front of lake',
    title: 'Beauty',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Opti ovel molestias, sapiente adipisci nobis, laudantium deleniti animi, quod obcaecati voluptate nesciunt, beatae doloremque quia! Nostrum?'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/715821/pexels-photo-715821.jpeg',
    alt: 'Woman looking at leaf',
    title: 'Grads',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/4148842/pexels-photo-4148842.jpeg',
    alt: 'Family playing in field',
    title: 'Family',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Opti ovel moles.'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg',
    alt: 'Woman in black and white photo',
    title: 'Headshots',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Opti ovel molestias, sapiente adipisci nobis, laudantium deleniti animi, quod.'
  }
];

type Props = {
  headerTitle: string;
  headerText: string;
};

export default function GalleryTeaser({ headerTitle, headerText }: Props) {
  return (
    <section className={scss.galleryTeaser}>
      <div className={scss.inner}>
        <SectionHeader title={headerTitle} text={headerText} />
        <div className={scss.container}>
          {images.map((image) => (
            <div key={image.id} className={scss.image}>
              <div className={scss.title}>{image.title}</div>
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={100}
              />
              <div className={scss.details}>
                <h3>{image.title}</h3>
                <p>
                  {image.details}
                  <br />
                  <br /> <Link href={'#'}>See More...</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
