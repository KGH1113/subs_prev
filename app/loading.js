"use client";

import { useEffect } from "react";
import styles from "./loading.module.css";

const LoadingScreen = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <>
      {document.body.className.split(" ").pop() === "dark-mode-variables" ? (
        <>
          <main>
            <div className={styles.skeleton_main_dark}></div>
          </main>
          <div className="right-section">
            <div className={styles.skeleton_right_dark}></div>
          </div>
        </>
      ) : (
        <>
          <main>
            <div className={styles.skeleton_main}></div>
          </main>
          <div className="right-section">
            <div className={styles.skeleton_right}></div>
          </div>
        </>
      )}
    </>
  );
};

export default LoadingScreen;
