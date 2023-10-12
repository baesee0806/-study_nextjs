"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Tag.module.css";
export default function Tag() {
  const [tag, setTag] = useState("최신순");
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
          color: tag === "최신순" ? "#63e6be" : "#ffffff",
          borderBottom: tag === "최신순" ? "2px solid #63e6be" : "none",
        }}
      >
        최신순
      </div>
      <div
        onClick={() => handleTagState("##")}
        style={{
          color: tag === "##" ? "#63e6be" : "#ffffff",
          borderBottom: tag === "##" ? "2px solid #63e6be" : "none",
        }}
      >
        최신순
      </div>
      <div
        onClick={() => handleTagState("###")}
        style={{
          color: tag === "###" ? "#63e6be" : "#ffffff",
          borderBottom: tag === "###" ? "2px solid #63e6be" : "none",
        }}
      >
        최신순
      </div>
    </div>
  );
}
