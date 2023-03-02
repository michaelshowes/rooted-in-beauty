import Link from 'next/link';
import scss from './header.module.scss';
import Logo from '../../assets/svg/rooted.svg';

type Props = {
  node: {
    id: string;
    label: string;
    uri: string;
  };
};

export default async function Header() {
  return (
    <header className={scss.header}>
      <div className={scss.logo}>
        <Logo />
      </div>
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
    </header>
  );
}
