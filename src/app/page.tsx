"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Form } from "@/components/Form";
import { options } from "@/utils/options";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ZONKOMETER</h1>
      <div className={styles.zonkSelect}>
        <Form options={options} />
      </div>
      <Image
        src="/zonk.png"
        alt="zonk"
        width={500}
        height={500}
        className={styles.zonk}
      />

      <p>Okay, zeig mir einfach die Liste.</p>
    </main>
  );
}
