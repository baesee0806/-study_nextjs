import styles from "../styles/DetailDocs.module.css";
import Image from "next/image";
import img from "../assets/React-query.jpg";
export default function DetailDocs() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Title</div>
      <div className={styles.docsSettingBox}>
        <div className={styles.docsTimetemp}>문서 생성일자</div>
        <div className={styles.docsUpdateDeleteBox}>
          <div>수정</div>
          <div>삭제</div>
        </div>
      </div>
      <div className={styles.tag}>태그</div>
      <Image src={img} alt="img" width={1000} height={500} />
      <div className={styles.content}>content area</div>
    </div>
  );
}
