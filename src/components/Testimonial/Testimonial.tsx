import SectionHeader from '@components/SectionHeader/SectionHeader';
import Image from 'next/image';
import scss from './testimonial.module.scss';

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <section className={scss.testimonial}>
      <div className={scss.inner}>
        <SectionHeader
          title={'Testimonial'}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi maiores delectus perferendis debitis.'
          }
        />
        <div className={scss.container}>
          <div className={scss.quoteWrapper}>
            <div className={scss.quote}>
              &ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident molestiae enim obcaecati non assumenda suscipit animi
              neque, illo similique consequuntur.&rdquo;
            </div>
            <div className={scss.attribute}>
              <div className={scss.name}>- Jane Doe</div>
            </div>
          </div>
          <div className={scss.image}>
            <Image
              src='https://images.pexels.com/photos/5637704/pexels-photo-5637704.jpeg'
              alt='testimonal image'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
