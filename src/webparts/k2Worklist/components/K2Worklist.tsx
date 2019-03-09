import * as React from 'react';
import styles from './K2Worklist.module.scss';
import { IK2WorklistProps } from './IK2WorklistProps';
import { escape } from '@microsoft/sp-lodash-subset';



export default class K2Worklist extends React.Component<IK2WorklistProps, {}> {
  public render(): React.ReactElement<IK2WorklistProps> {
    return (
      <div className={ styles.ticTacToev3 }>
        <div className={ styles.container }>

        {/*
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        */}
        </div>
      </div>
    );
  }
}
