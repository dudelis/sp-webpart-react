import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TicTacToev3WebPartStrings';
import TicTacToev3 from './components/TicTacToev3';
import { ITicTacToev3Props } from './components/ITicTacToev3Props';

export interface ITicTacToev3WebPartProps {
  description: string;
}

export default class TicTacToev3WebPart extends BaseClientSideWebPart<ITicTacToev3WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITicTacToev3Props > = React.createElement(
      TicTacToev3,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
