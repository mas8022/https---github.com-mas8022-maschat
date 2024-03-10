import React from "react";
import style from "../../src/app/styles/storeList.module.css";
export default function StoreList() {
  return (
    <div className={style.storeList}>
      <div className={style.storeListItem}>
        <img className={style.addIcon} src="/images/plus.svg" alt="add icon" />
      </div>

      <div
        style={{
          background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5w7hYktD4byIBek2BULUelcM6ybvsS5JBA3PzmA8pA&s')`,
        }}
        className={style.storeListItem}
      ></div>
      <div
        style={{
          background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvcxSjwABvomYZsgSIsYinTKxioBwSJKi5ojOY-aRyQ&s')`,
        }}
        className={style.storeListItem}
      ></div>
    </div>
  );
}
