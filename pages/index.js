import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        voluptatum quam delectus obcaecati vitae, optio vero minus sit illum
        earum at saepe, dolorum ipsum mollitia! Praesentium voluptatem totam vel
        tenetur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        voluptatum quam delectus obcaecati vitae, optio vero minus sit illum
        earum at saepe, dolorum ipsum mollitia! Praesentium voluptatem totam vel
        tenetur!
      </p>
    </div>
  );
}
