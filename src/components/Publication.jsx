import styles from "@/styles/publication.module.scss";
import UserInfo from "./pure/UserInfo";
import {
  HeartIcon,
  BookmarkIcon,
  EllipsisVerticalIcon,
  ArrowUturnRightIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
// Componente de las publicaciones.
const Publication = () => {
  return (
    <article className={styles.publication}>
      <header className={styles.header}>
        <div className={styles.contentDiv}>
          <UserInfo />
          <p className={styles.agoTime}>1 hora</p>
        </div>
        <button className={styles.button}>
          <EllipsisVerticalIcon className={styles.iconActive} />
        </button>
      </header>
      <div className={styles.main}>
        <div className={styles.pubContent}>
          <p className={styles.description}>
            ¡Herramienta para validar tu pagina web!
          </p>
          <figure className={styles.figure}>
            <Image
              src={"/images/others/herramientas.png"}
              width={600}
              height={300}
              alt=""
            />
          </figure>
        </div>
        <div className={styles.reactions}>
          <span className={styles.spanReaction}>300 me gusta</span>
          <div className={styles.contentDiv}>
            <span className={styles.spanReaction}>30 comentario</span>
            <span className={styles.spanCircle} />
            <span className={styles.spanReaction}> 60 veces compartido</span>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.contentDiv}>
          <button className={styles.button}>
            <HeartIcon className={styles.icon} />
          </button>
          <button className={styles.button}>
            <ChatBubbleLeftEllipsisIcon className={styles.icon} />
          </button>
          <button className={styles.button}>
            <ArrowUturnRightIcon className={styles.icon} />
          </button>
        </div>
        <button className={styles.button}>
          <BookmarkIcon className={styles.icon} />
        </button>
      </footer>
    </article>
  );
};

export default Publication;
