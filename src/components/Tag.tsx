"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Tag.module.css";
export default function Tag() {
  const [tag, setTag] = useState("");
  const router = useRouter();

  const handleTagState = (value: string) => {
    setTag(value);
    router.push(`/?tag=${value}`);
  };
  return (
    <div className={styles.container}>
      <div
        onClick={() => handleTagState("최신순")}
        style={{
          color: tag === "최신순" || tag === "" ? "#63e6be" : "#ffffff",
          borderBottom:
            tag === "최신순" || tag === "" ? "2px solid #63e6be" : "none",
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
