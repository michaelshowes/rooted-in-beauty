import scss from './pageContainer.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return <div className={scss.pageContainer}>{children}</div>;
}
