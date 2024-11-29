import Link from "next/link";
import styles from "./menuLink.module.css";

import React from "react";

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
