import Image from 'next/image';
import Link from 'next/link';
import scss from './card.module.scss';

type Props = {
  image: string;
  altText: string;
  title: string;
  text: string;
  url: string;
  width?: number;
  height?: number;
};

export default function Card({
  image,
  altText,
  title,
  text,
  url,
  width,
  height
}: Props) {
  return (
    <article className={scss.card}>
      <div className={scss.image}>
        <Image src={image} alt={altText} width={width} height={height} />
      </div>
      <h3>{title}</h3>
      <p className={scss.teaserText}>{text}</p>
      <Link href={url}>Read more...</Link>
    </article>
  );
}
