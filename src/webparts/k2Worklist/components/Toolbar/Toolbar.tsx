import * as React from "react";
import { CommandBar, ICommandBarItemProps  } from 'office-ui-fabric-react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

import { IPropertyState } from '../../reducers/propertyReducer';

export interface IProps{
  refresh: () => void;
  webpartProps: IPropertyState;
  toggleSearchToolbar: () => void;
}

export default class Toolbar extends React.Component<IProps, any> {

    public render(): JSX.Element {
        return (
            <CommandBar items = {[]} farItems={this._getFarItems()}/>
        );
    }
    private _getFarItems = () : ICommandBarItemProps[] =>{
        let buttons : ICommandBarItemProps[] = [];
        const {webpartProps} = this.props;
        const refresh = this.props.refresh as any;
        if (webpartProps.showOOF){
          buttons.push({
            key: 'oof',
            name: 'Out of Office',
            ariaLabel: 'Out of Office',
            iconProps: {
              iconName: 'OutOfOffice'
            },
            iconOnly: true,
            onClick: () => console.log('OOF')
          });
        }
        if (webpartProps.showSearch){
          buttons.push({
            key: 'search',
            name: 'Search',
            ariaLabel: 'Search',
            iconProps: {
              iconName: 'Search'
            },
            iconOnly: true,
            onClick: this.props.toggleSearchToolbar
          });
        }
        if (webpartProps.showFilter){
          buttons.push({
            key: 'filter',
            name: 'Filter',
            ariaLabel: 'Filter',
            iconProps: {
              iconName: 'Filter'
            },
            iconOnly: true,
            onClick: () => console.log('Filter')
          });
        }
        buttons.push(
          {
            key: 'refresh',
            name: 'Refresh',
            ariaLabel: 'Refresh',
            iconProps: {
              iconName: 'Refresh'
            },
            iconOnly: true,
            onClick: refresh
          }
        );

        return buttons;
    }
}
