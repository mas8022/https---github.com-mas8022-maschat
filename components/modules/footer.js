import React from "react";
import style from "../../src/app/styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faShoppingBag, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className={style.footer}>
      <FontAwesomeIcon className={style.footer__icons} icon={faHome} />
      <FontAwesomeIcon className={style.footer__icons} icon={faShoppingBag} />
      <div className={style.storeListItem}>
        <img className={style.addIcon} src="/images/plus.svg" alt="add icon" />
      </div>
      <FontAwesomeIcon className={style.footer__icons} icon={faHeart} />
      <FontAwesomeIcon className={style.footer__icons} icon={faUser} />
    </div>
  );
}
