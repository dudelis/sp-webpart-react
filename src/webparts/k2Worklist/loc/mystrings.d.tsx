declare interface IK2WorklistWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  TitleFieldLabel: string;
  K2UrlFieldLabel: string;

  SettingsGroupName: string;
  ShowToolbarFieldLabel: string;
  ShowFilterFieldLabel: string;
  ShowSearchFieldLabel: string;
  ShowOutOfOfficeFieldLabel: string;
  RowsFieldLabel: string;
}

declare module 'K2WorklistWebPartStrings' {
  const strings: IK2WorklistWebPartStrings;
  export = strings;
}
