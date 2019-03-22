import * as React from "react";
import { MarqueeSelection } from "office-ui-fabric-react/lib/MarqueeSelection";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import { ITask } from "../../types";

export interface Props {
  children?: React.ReactNode;
  tasks: ITask[];
  rows?: number;
}

export interface State {}

export default class TaskGrid extends React.Component<Props, State> {
  private _selection: Selection;
  constructor(props: Props) {
    super(props);
    this._selection = new Selection();
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <Fabric>
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={this.props.tasks}
            columns={this._renderColumns()}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            //{selection={this._selection}}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            //onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </Fabric>
    );
  }
  private _renderColumns = (): IColumn[] => {
    return [
      {
        key: "activityName",
        name: "Activity Name",
        fieldName: "activityName",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: "workflowInstanceFolio",
        name: "Folio",
        fieldName: "workflowInstanceFolio",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: "taskStartDate",
        name: "Task Start Date",
        fieldName: "taskStartDate",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: "workflowDisplayName",
        name: "Workflow Name",
        fieldName: "workflowDisplayName",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      }
    ];
  }
}
