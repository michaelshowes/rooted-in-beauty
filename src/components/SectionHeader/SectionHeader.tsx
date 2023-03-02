import scss from './sectionHeader.module.scss';

type Props = {
  title: string;
  text?: string;
};

export default function SectionHeader({ title, text }: Props) {
  return (
    <div className={scss.sectionHeader}>
      <h2>
        {title}
        <span>.</span>
      </h2>
      <p>{text}</p>
    </div>
  );
}
