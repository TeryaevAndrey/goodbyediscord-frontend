import { MdOutlineFileUpload } from "react-icons/md";
import styles from "./styles.module.scss";

export const UploadAvatar = () => {
  return (
    <div className={styles.root}>
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        alt="Channel-avatar"
      />

      <div className={styles.hoverBlock}>
        <MdOutlineFileUpload size={24} />
      </div>
    </div>
  );
};
