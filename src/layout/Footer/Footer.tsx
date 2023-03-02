import scss from './footer.module.scss';

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
  return (
    <footer className={scss.footer}>
      <div className={scss.inner}>
        <AnimatedLogo />
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link href={'/portfolio'}>Portfolio</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={scss.copyright}>&copy; 2023 Rooted in Beauty LLC</div>
      </div>
    </footer>
  );
}
