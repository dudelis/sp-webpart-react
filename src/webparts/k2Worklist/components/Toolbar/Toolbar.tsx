import * as React from "react";
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { IConnectedProps } from './ToolbarContainer';

export default class Toolbar extends React.Component<IConnectedProps, any> {

    public render(): JSX.Element {
        return (
            this.props.webpartProps.showToolbar && <CommandBar items = {[]} farItems={this._getFarItems()}/>
        );
    }
    private _getFarItems = () =>{
        let buttons = [];

        if (this.props.webpartProps.showOOF){
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
        if (this.props.webpartProps.showSearch){
          buttons.push({
            key: 'search',
            name: 'Search',
            ariaLabel: 'Search',
            iconProps: {
              iconName: 'Search'
            },
            iconOnly: true,
            onClick: () => console.log('Search')
          });
        }
        if (this.props.webpartProps.showFilter){
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
        return buttons;
    }
}
