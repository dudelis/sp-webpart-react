import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'K2WorklistWebPartStrings';
import K2Worklist from './components/K2Worklist';
import { IK2WorklistProps } from './components/IK2WorklistProps';

export interface IIK2WorklistWebPartProps {
  description: string;
  k2url: string;
  context: any;
}

export default class TicTacToev3WebPart extends BaseClientSideWebPart<IIK2WorklistWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IK2WorklistProps > = React.createElement(
      K2Worklist,
      {
        description: this.properties.description,
        K2Url: this.properties.k2url,
        context: this.context
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
                }),
                PropertyPaneTextField('k2url', {
                  label: strings.K2Url
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
