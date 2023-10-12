import Image from "next/image";
import img from "../assets/React-query.jpg";
import styles from "../styles/Content.module.css";
interface ContentProps {
  searchParams?: {
    tag: string;
  };
  mt?: number;
}
export default function Content({ searchParams, mt }: ContentProps) {
  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <div>
        <Image src={img} alt="기본 이미지" width={768} height={402} />
        <div className={styles.title}>Title</div>
        <div className={styles.explanation}>Explanation area</div>
      </div>
    </div>
  );
}
