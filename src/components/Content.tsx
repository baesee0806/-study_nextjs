import Image from "next/image";
import img from "../assets/React-query.jpg";
import styles from "../styles/Content.module.css";
import Link from "next/link";
interface ContentProps {
  searchParams?: {
    tag: string;
  };
  mt?: number;
  page?: string;
}
export default function Content({ searchParams, mt, page }: ContentProps) {
  if (page === "/") {
    return (
      <div className={styles.container} style={{ marginTop: `${mt}px` }}>
        <Link href={`/${1}`}>
          <Image src={img} alt="기본 이미지" width={768} height={402} />
        </Link>
        <Link href={`/${1}`} className={styles.title}>
          Title
        </Link>
        <div className={styles.explanation}>Explanation area</div>
      </div>
    );
  }
  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <Link href={`/${page}/${1}`}>
        <Image src={img} alt="기본 이미지" width={768} height={402} />
      </Link>
      <Link href={`/${page}/${1}`} className={styles.title}>
        Title
      </Link>
      <div className={styles.explanation}>Explanation area</div>
    </div>
  );
}
