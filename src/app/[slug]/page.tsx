type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <div>This is the {params.slug} page</div>;
}
