import Content from "@/components/Content";
import About from "@/components/About";
import Tag from "@/components/Tag";
import styles from "../styles/Main.module.css";
interface SearchParams {
  searchParams: {
    tag: string;
  };
}
export default function Home({ searchParams }: SearchParams) {
  return (
    <div>
      <About />
      <Tag />
      <Content searchParams={searchParams} page="/" />
    </div>
  );
}
