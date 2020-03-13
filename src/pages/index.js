import styles from './index.css';
import React from 'react';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li className="flex justify-center">
          <a href="https://umijs.org/guide/getting-started.html" className="bg-blue-500 p-3 m-3">
            Getting Started with UMI.JS
          </a>
          <a href="https://www.tailwindcss.cn/" className="bg-blue-300 p-3 m-3">
            Getting Started with Tailwind
          </a>
        </li>
      </ul>
    </div>
  );
}
