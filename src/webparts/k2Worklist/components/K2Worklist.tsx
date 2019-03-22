import * as React from "react";
import styles from "./K2Worklist.module.scss";

import ToolbarContainer from "./Toolbar";
import TaskGridContainer from './TaskGrid';

export const K2Worklist = (): JSX.Element => {
  return (
    <div className={styles.k2Worklist}>
      <div className={styles.container}>
        <ToolbarContainer />
        <TaskGridContainer />
      </div>
    </div>
  );
};
