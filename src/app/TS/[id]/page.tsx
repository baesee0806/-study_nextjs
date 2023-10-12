interface DetailTSProps {
  params: {
    id: string;
  };
}
export default function DetailTS({ params }: DetailTSProps) {
  return <div>{params.id}</div>;
}
