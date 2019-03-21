import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneSlider,
} from "@microsoft/sp-webpart-base";
import { AadTokenProvider, AadHttpClient } from '@microsoft/sp-http'; 

import * as strings from "K2WorklistWebPartStrings";
import K2WorklistContainer from "./components/K2WorklistContainer";
import { IK2WorklistWebPartProps } from "./IK2WorklistWebPartProps";

//Redux items
import { Store } from "redux";
import { Provider } from "react-redux";
import configureStore, { IRootState } from "./reducers/Store";
import {
  applyProperties,
  setContext,
  updateProperty
} from "./actions/PropertyActions";

export default class K2WorklistWebPart extends BaseClientSideWebPart<
  IK2WorklistWebPartProps
> {
  private store: Store<IRootState>;
  //Initiate Store
  public constructor() {
    super();
    this.store = configureStore();
  }

  public render(): void {
    if (this.renderedOnce) {
      return;
    }
    const element = (
      <Provider store={this.store}>
        <K2WorklistContainer title="hello" />
      </Provider>
    );

    ReactDom.render(element, this.domElement);
  }

  //Applying the properties - beginning
  protected onInit(): Promise<void> {
    this.store.dispatch(applyProperties(this.properties));
    this.store.dispatch(setContext(this.context.aadHttpClientFactory));
    this.context.aadTokenProviderFactory
    .getTokenProvider()
    .then((tokenProvider: AadTokenProvider): Promise<string> => {
      // retrieve access token for the enterprise API secured with Azure AD
      return tokenProvider.getToken('https://api.k2.com/');
    })
    .then((accessToken: string):void =>{
      console.log(accessToken);
    });
    // const client = this.context.aadHttpClientFactory.getClient('fb9bb949-3db7-43ae-b57e-874ea95042b3').then(client => {
    //   client.get(`https://k2.denallix.com/api/workflow/preview/tasks`, AadHttpClient.configurations.v1).then(response =>{
    //     console.log(response);
    //   });
    // });
    return super.onInit();
  }
  //Property Changed
  protected onPropertyChanged(propertyPath, oldValue, newValue) {
    if (!this.disableReactivePropertyChanges) {
      this.store.dispatch(updateProperty(propertyPath, newValue));
    }
  }
  //Property pane is changed
  protected onAfterPropertyPaneChangesApplied() {
    this.store.dispatch(applyProperties(this.properties));
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
