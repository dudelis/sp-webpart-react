import * as React from 'react';
import styles from './TicTacToev3.module.scss';
import { ITicTacToev3Props } from './ITicTacToev3Props';
import { escape } from '@microsoft/sp-lodash-subset';


export class Square extends React.Component<any, any>{
  render(){
    return(
      <div className={`ms-Grid-col ms-u-sm4 ms-u-md4 ${ styles.squareCont }`}>
        Hello from Square
      </div>
    );
  }
}


export class Board extends React.Component<any, any>{
  private renderRow(){
    return(
      <div className={`ms-Grid-row ${styles.rowCont}`}>
        <Square />
        <Square />
        <Square />
      </div>
    );
  }


  render(){
    return(
      <div className={ `ms-Grid ${styles.gridCont}`}>
        
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
      </div>
    );
  }
}


export class Game extends React.Component<any, any>{
  render(){
    return(
      <div>
        <h2>Hello from Game</h2>
        <Board />
      </div>
    );

  };
}

export default class TicTacToev3 extends React.Component<ITicTacToev3Props, {}> {
  public render(): React.ReactElement<ITicTacToev3Props> {
    return (
      <div className={ styles.ticTacToev3 }>
        <div className={ styles.container }>
        <Game

        />

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
