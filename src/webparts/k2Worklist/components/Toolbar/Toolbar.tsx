import * as React from "react";
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

export interface Props {
    children?: React.ReactNode;
}

export interface State {
}

export default class Toolbar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    public render(): JSX.Element {
        return (
            <CommandBar 
                items = {[]}
                farItems={this._getFarItems()}
            />
        )
    }
    private _getFarItems = () =>{
        return [
            {
              key: 'oof',
              name: 'Out of Office',
              ariaLabel: 'Out of Office',
              iconProps: {
                iconName: 'OutOfOffice'
              },
              iconOnly: true,
              onClick: () => console.log('Tiles')
            },
            {
              key: 'search',
              name: 'Search',
              ariaLabel: 'Search',
              iconProps: {
                iconName: 'Search'
              },
              iconOnly: true,
              onClick: () => console.log('Info')
            },
            {
                key: 'filter',
                name: 'Filter',
                ariaLabel: 'Filter',
                iconProps: {
                  iconName: 'Filter'
                },
                iconOnly: true,
                onClick: () => console.log('Info')
              }
          ];
    }
}
