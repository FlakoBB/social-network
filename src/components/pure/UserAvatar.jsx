import Image from "next/image";
import styles from "@/styles/userAvatar.module.scss";

const UserAvatar = () => {
  return (
    <div className={styles.figure}>
      <figure className={styles.user}>
        <Image
          src={"/images/profilePictures/Fede.png"}
          width={48}
          height={48}
          alt="Federico Diaz. FullStack Developer"
        />
      </figure>
      <div>
        <p className={styles.name}>Federico Diaz</p>
        <p className={styles.workstation}>FullStack Developer</p>
      </div>
    </div>
  );
};

export default UserAvatar;
