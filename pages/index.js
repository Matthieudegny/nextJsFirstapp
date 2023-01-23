import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>

        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum quam delectus obcaecati vitae, optio vero minus sit illum
          earum at saepe, dolorum ipsum mollitia! Praesentium voluptatem totam
          vel tenetur!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum quam delectus obcaecati vitae, optio vero minus sit illum
          earum at saepe, dolorum ipsum mollitia! Praesentium voluptatem totam
          vel tenetur!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
