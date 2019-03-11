import * as React from 'react';
import styles from './K2Worklist.module.scss';
import { IK2WorklistProps } from './IK2WorklistProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';

import { ITaskItem } from '../models/ITaskItem'; 
import sample from '../sample/sampledata';

export interface IK2WorklistState {
  items: ITaskItem[];
  selectedItems: ITaskItem[];
}

export default class K2Worklist extends React.Component<IK2WorklistProps, IK2WorklistState> {
  private _selection: Selection;
  private _allItems: ITaskItem[];
  private _columns: IColumn[];

  constructor (props: IK2WorklistProps){
    super(props);
    console.log(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectedItems: this._getSelectedItems() })
    });
    this._allItems = sample.tasks as any as ITaskItem[];

    this._columns = [
      { 
        key: 'workflowInstanceFolio',
        name: 'Folio',
        fieldName: 'workflowInstanceFolio',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true, 
        onRender: item => (
          <Link key={item.serialNumber} href={item.formURL} target="_blank" >
            {item.workflowInstanceFolio}
          </Link>
        )
    },
      {
        key: 'activityName',
        name: 'Activity',
        fieldName: 'activityName',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'taskStartDate',
        name: 'Task Start Date',
        fieldName: 'taskStartDate',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
        onRender: item => (new Date(item.taskStartDate)).toUTCString()
      },
      {
        key: 'workflowName',
        name: 'Workflow',
        fieldName: 'workflowName',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      }
    ];

    this.state = {
      items: this._allItems,
      selectedItems: []
    };
  }

  public render(): React.ReactElement<IK2WorklistProps> {
    const { items, selectedItems } = this.state;
    
    return (
      <div className={ styles.ticTacToev3 }>
        <div className={ styles.container }>
        <MarqueeSelection selection={this._selection} data-is-scrollable="true">
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          />
        </MarqueeSelection>
        </div>
      </div>
    );
  }
  private _getSelectedItems():  any {
    return this._selection.getSelection();
  }

  
}
