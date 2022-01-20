import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { lists } from "../src/constants/lists";
import TaskColumn from "../src/components/TaskColumn";

export default function Home() {
  const { container, header, title, filter, content } = styles;

  return (
    <div className={container}>
      <Head>
        <title>Cool Task List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={header}>
        <span className={title}>Task List</span>
        <button className={filter}>
          <span>This day</span>
          <FontAwesomeIcon className="w-6 h-4" icon={faAngleDown} />
        </button>
      </div>
      <div className={content}>
        {lists.map((x) => (
          <TaskColumn key={x.title} taskColumn={x} styles={styles}></TaskColumn>
        ))}
      </div>
    </div>
  );
}
