import { imgUrls } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="gallery">
      {imgUrls.map((imgUrl, index) => {
        return (
          <Link key={index} href={`/photo/${index}`}>
            <Image
              src={imgUrl}
              alt={imgUrl}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              sizes="60vw"
              priority
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
