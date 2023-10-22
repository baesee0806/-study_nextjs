"use client";
import { create, createProps } from "@/api/firestore/crud";
import styles from "../../styles/MarkdownEditor.module.css";
import MarkdownEditor from "@/components/MarkdownEditor";
import { useState } from "react";
import Modal from "@/components/Modal";
export default function Create() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("Javascript");
  const [modalState, setModalState] = useState<boolean>(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await create(category, {
      title,
      content,
      category,
      createdAt: new Date(),
    });
  };
  const handleModalState = (e: React.FormEvent) => {
    e.preventDefault();
    setModalState(true);
  };
  return (
    <>
      {modalState ? <Modal modalState={setModalState} submit={submit} /> : null}
      <form className={styles.container} onSubmit={handleModalState}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Javascript">Javascript</option>
          <option value="React">React</option>
          <option value="Next.JS">Next.JS</option>
          <option value="Project">Project</option>
          <option value="TIL">TIL</option>
        </select>
        <input
          className={styles.title}
          placeholder="제목을 입력해주세요"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MarkdownEditor setValue={setContent} />
        <button className={styles.btn} type="submit">
          출간하기
        </button>
      </form>
    </>
  );
}
