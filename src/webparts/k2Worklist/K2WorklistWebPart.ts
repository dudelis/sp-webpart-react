import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneSlider,
  PropertyPaneDropdownOptionType,
  PropertyPaneChoiceGroup,
  PropertyPaneDynamicField,
  PropertyPaneDropdown
} from "@microsoft/sp-webpart-base";

import * as strings from "K2WorklistWebPartStrings";
import K2Worklist from "./components/K2Worklist";
import { IK2WorklistProps } from "./components/IK2WorklistProps";

export interface IK2WorklistWebPartProps {
  title: string;
  k2url: string;
  showToolbar: boolean;
  showFilter: boolean;
  showSearch: boolean;
  showOOF: boolean;
  rows: number;
}

export default class K2WorklistWebPart extends BaseClientSideWebPart<
  IK2WorklistWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<IK2WorklistProps> = React.createElement(
      K2Worklist,
      {
        title: this.properties.title,
        k2url: this.properties.k2url,
        showToolbar: this.properties.showToolbar,
        showFilter: this.properties.showFilter,
        showSearch: this.properties.showSearch,
        showOOF: this.properties.showOOF,
        rows: this.properties.rows
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  protected get disableReactivePropertyChanges() {
    return true;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
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
                PropertyPaneTextField("title", {
                  label: strings.TitleFieldLabel
                }),
                PropertyPaneTextField("k2url", {
                  label: strings.K2UrlFieldLabel
                })
              ]
            },
            {
              groupName: strings.SettingsGroupName,
              groupFields: [
                PropertyPaneCheckbox("showToolbar", {
                  text: strings.ShowToolbarFieldLabel
                }),
                PropertyPaneCheckbox("showFilter", {
                  text: strings.ShowFilterFieldLabel
                }),
                PropertyPaneCheckbox("showSearch", {
                  text: strings.ShowSearchFieldLabel
                }),
                PropertyPaneCheckbox("showOOF", {
                  text: strings.ShowOutOfOfficeFieldLabel
                }),
                PropertyPaneSlider("rows", {
                  label: strings.RowsFieldLabel,
                  min: 1,
                  max: 100
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
