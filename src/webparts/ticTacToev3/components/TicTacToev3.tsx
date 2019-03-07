import * as React from 'react';
import styles from './TicTacToev3.module.scss';
import { ITicTacToev3Props } from './ITicTacToev3Props';
import { escape } from '@microsoft/sp-lodash-subset';


export class Square extends React.Component<any, any>{
  render(){
    return(
      <div className={`ms-Grid-col ms-u-sm4 ms-u-md4 ${ styles.squareCont }`} onClick={() => this.props.onSquareClick(this.props.index)}>
        {this.props.value}
      </div>
    );
  }
}


export class Board extends React.Component<any, any>{

  constructor(props){
    super(props);
    var initialVals = [ 'O1','X2', 'O3',
                        'O4','X5', 'O6',
                        'O7','X8', 'O9'];
    
    this.state = {values: initialVals}
  }

  handleSqueareClick = (index) => {
    console.log('key', index);
  }

  private renderRow(startIndex:number, endIndex:number){


    return(
      <div className={`ms-Grid-row ${styles.rowCont}`}>
      {this.state.values.map((value, key) => {
        return key >= startIndex && key <= endIndex ? <Square onSquareClick={this.handleSqueareClick} value={value} index={key} key={key}/> : null; 
      })}
      </div>
    );
  }


  render(){
    return(
      <div className={ `ms-Grid ${styles.gridCont}`}>
        
        {this.renderRow(0, 2)}
        {this.renderRow(3, 5)}
        {this.renderRow(6, 8)}
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
