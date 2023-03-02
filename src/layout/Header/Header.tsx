import mainNav from '@utils/data/mainNav';
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
  const data = await mainNav();

  return (
    <header className={scss.header}>
      <div className={scss.logo}>
        <Logo />
      </div>
      <ul>
        {data.map(({ node }: Props) => (
          <li key={node.id}>
            <Link href={node.uri}>{node.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
