import Image from 'next/image';
import Link from 'next/link';
import scss from './ctaBanner.module.scss';

type Props = {
  title: string;
  text: string;
  image: string;
  altText: string;
  btnText: string;
};

export default function CtaBanner({
  image,
  altText,
  title,
  text,
  btnText
}: Props) {
  return (
    <section className={scss.ctaBanner}>
      <div className={scss.image}>
        <Image src={image} alt={altText} fill />
      </div>
      <div className={scss.content}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={'/'} className={scss.link}>
          {btnText}
        </Link>
      </div>
    </section>
  );
}
