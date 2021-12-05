import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.png";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.wrap}>
      <img className={styles.avatar} src={avatar} alt="avatar" width="32" />
      <span className={styles.name}>Welcome, {name}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
