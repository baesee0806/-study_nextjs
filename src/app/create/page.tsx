"use client";
import styles from "../../styles/MarkdownEditor.module.css";
import MarkdownEditor from "@/components/MarkdownEditor";
import { useState } from "react";
export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const submit = () => {
    const data = {
      title,
      content,
      createAt: new Date(),
      docId: 1,
    };
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.title}
        placeholder="제목을 입력해주세요"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <MarkdownEditor setValue={setContent} />
      <button className={styles.btn}>출간하기</button>
    </div>
  );
}
