import Content from "@/components/Content";

interface CatagoriDocsProps {
  params: {
    id: string;
  };
}
export default function CatagoriDocs({ params }: CatagoriDocsProps) {
  return (
    <div>
      <Content mt={30} page={`docs/${params.id}`} />
    </div>
  );
}
