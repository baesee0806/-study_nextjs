import styles from "../styles/About.module.css";
import Image from "next/image";
import githubIcon from "../assets/github-mark-white.png";
import velogIcon from "../assets/velog-icon.png";
import Link from "next/link";
const About = () => {
  return (
    <div className={styles.container}>
      <Image
        src={githubIcon}
        alt="my profile image"
        width={128}
        height={128}
        style={{ borderRadius: "50%", margin: "0 1.5rem 0 8rem" }}
      />
      <div className={styles.textBox}>
        <div className={styles.myInfoBox}>
          <div className={styles.myName}>배성완</div>
          <Link
            href={"https://github.com/baesee0806"}
            style={{ marginRight: "5px" }}
          >
            <Image src={githubIcon} alt="Github icon" width={24} height={24} />
          </Link>
          <Link href={"https://velog.io/@wani_bae"}>
            <Image src={velogIcon} alt="Velog icon" width={24} height={24} />
          </Link>
        </div>
        <div className={styles.introduce}>Junier Front-end Developer !</div>
      </div>
    </div>
  );
};

export default About;
