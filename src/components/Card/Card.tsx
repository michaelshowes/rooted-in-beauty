import Image from 'next/image';
import Link from 'next/link';
import scss from './card.module.scss';

type Props = {
  image: string;
  altText: string;
  title: string;
  text: string;
  url: string;
};

export default function Card({ image, altText, title, text, url }: Props) {
  return (
    <article className={scss.card}>
      <div className={scss.image}>
        <Image src={image} alt={altText} fill />
      </div>
      <h3>{title}</h3>
      <p className={scss.teaserText}>{text}</p>
      <Link href={url}>Read more...</Link>
    </article>
  );
}
