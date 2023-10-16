interface DetailDocsProps {
  params: {
    id: string;
  };
}
export default function DetailDocs({ params }: DetailDocsProps) {
  return <div>{params.id}</div>;
}
