"use client";
import { useRouter } from "next/navigation";
import styles from "../../styles/TS.module.css";
interface Items {
  id: number;
  name: string;
  bgc: string;
  color: string;
}
const TS = () => {
  const router = useRouter();
  const items: Items[] = [
    { id: 1, name: "Javascript", bgc: "#F7E029", color: "#000000" },
    { id: 2, name: "React", bgc: "#20D9FE", color: "#ffffff" },
    { id: 3, name: "Next.JS", bgc: "#3c3c3c", color: "#ffffff" },
    { id: 4, name: "Project", bgc: "#BEADFA", color: "#ffffff" },
  ];
  const handleRoute = (value: string) => {
    router.push(`/TS/${value}`);
  };
  return (
    <div className={styles.container}>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className={styles.docsItem}
            style={{ backgroundColor: `${item.bgc}`, color: `${item.color}` }}
            onClick={() => handleRoute(item.name)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default TS;
