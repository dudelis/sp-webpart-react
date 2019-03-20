import * as React from 'react';
import styles from './K2Worklist.module.scss';
import { IK2WorklistProps } from './IK2WorklistProps';
import { escape } from '@microsoft/sp-lodash-subset';

import Toolbar from './Toolbar';

export default class K2Worklist extends React.Component<IK2WorklistProps, {}> {
  public render(): React.ReactElement<IK2WorklistProps> {
    return (
      <div className={ styles.k2Worklist }>
        <div className={ styles.container }>
          <Toolbar />
        </div>
      </div>
    );
  }
}
