import * as React from 'react';
import styles from './TicTacToev3.module.scss';
import { ITicTacToev3Props } from './ITicTacToev3Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TicTacToev3 extends React.Component<ITicTacToev3Props, {}> {
  public render(): React.ReactElement<ITicTacToev3Props> {
    return (
      <div className={ styles.ticTacToev3 }>
        <div className={ styles.container }>
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
        </div>
      </div>
    );
  }
}
