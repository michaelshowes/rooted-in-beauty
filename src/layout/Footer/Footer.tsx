import scss from './footer.module.scss';

import mainNav from '@utils/data/mainNav';
import AnimatedLogo from '../../assets/svg/rooted.svg';
import Link from 'next/link';

type Props = {
  node: {
    id: string;
    label: string;
    uri: string;
  };
};

export default async function Footer() {
  const data = await mainNav();

  return (
    <footer className={scss.footer}>
      <div className={scss.inner}>
        <AnimatedLogo />
        <nav>
          <ul>
            {data.map(({ node }: Props) => (
              <li key={node.id}>
                <Link href={node.uri}>{node.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={scss.copyright}>&copy; 2023 Rooted in Beauty LLC</div>
      </div>
    </footer>
  );
}
