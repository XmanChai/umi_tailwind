import React from 'react';

import styles from './index.css';
import 'tailwindcss/dist/base.css'
import 'tailwindcss/dist/components.css'
import 'tailwindcss/dist/utilities.css'

function BasicLayout(props) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <h1 className="text-center text-2xl bg-blue-700 p-8">Welcome to UMI && Tailwind!</h1>
      <p className="text-center text-base bg-blue-600 p-5">放心用吧，有PURGECSS你的CSS打包出去不超过20K</p>
      <div className={styles.title + " text-center"}><span>GO</span></div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
