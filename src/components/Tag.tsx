"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../styles/Tag.module.css";
export default function Tag() {
  const router = useRouter();
  const params = useSearchParams();
  const tag = params.get("tag");

  const handleTagState = (value: string) => {
    router.push(`/?tag=${value}`);
  };
  return (
    <div className={styles.container}>
      <div
        onClick={() => handleTagState("최신순")}
        style={{
          color: tag === "최신순" || tag === null ? "#63e6be" : "#ffffff",
          borderBottom:
            tag === "최신순" || tag === null ? "2px solid #63e6be" : "none",
        }}
      >
        최신순
      </div>
      <div
        onClick={() => handleTagState("안녕")}
        style={{
          color: tag === "안녕" ? "#63e6be" : "#ffffff",
          borderBottom: tag === "안녕" ? "2px solid #63e6be" : "none",
        }}
      >
        최신순
      </div>
      <div
        onClick={() => handleTagState("머지")}
        style={{
          color: tag === "머지" ? "#63e6be" : "#ffffff",
          borderBottom: tag === "머지" ? "2px solid #63e6be" : "none",
        }}
      >
        최신순
      </div>
    </div>
  );
}
