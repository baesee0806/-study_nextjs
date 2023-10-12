import Image from "next/image";
import img from "../assets/React-query.jpg";
import styles from "../styles/Content.module.css";
export default function Content() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={img} alt="기본 이미지" width={768} height={402} />
        <div>Title</div>
        <div>Explanation area</div>
      </div>
    </div>
  );
}
