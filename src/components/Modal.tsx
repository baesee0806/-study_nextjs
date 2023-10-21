import styles from "@/styles/Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.container}>
      <div className={styles.modalBox}>
        <form>
          <label id="password">비밀번호를 입력해주세요!</label>
          <input type="password" maxLength={20} />
          <div>
            <button>취소</button>
            <button>확인</button>
          </div>
        </form>
      </div>
    </div>
  );
}
