import Content from "@/components/Content";

interface CatagoriTSProps {
  params: {
    id: string;
  };
}
export default function CatagoriTS({ params }: CatagoriTSProps) {
  return (
    <div>
      <Content mt={30} page={`TS/${params.id}`} />
    </div>
  );
}
