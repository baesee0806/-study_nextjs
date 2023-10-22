import styles from "@/styles/Modal.module.css";
import { useState } from "react";

interface ModalProps {
  modalState: React.Dispatch<React.SetStateAction<boolean>>;
  submit: (e: React.FormEvent) => void;
}
export default function Modal({ modalState, submit }: ModalProps) {
  const [password, setPassword] = useState<string>("");
  const formSubmit = (e: React.FormEvent) => {
    if (password === process.env.NEXT_PUBLIC_password) {
      submit(e);
      modalState(false);
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.modalBox}>
        <form onSubmit={formSubmit}>
          <label id="password">비밀번호를 입력해주세요!</label>
          <input
            type="password"
            maxLength={20}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div>
            <button
              type="button"
              onClick={() => {
                modalState(false);
              }}
            >
              취소
            </button>
            <button type="submit">확인</button>
          </div>
        </form>
      </div>
    </div>
  );
}
