import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';

import { ITaskItem } from '../models/ITaskItem';

export default class K2ApiController {
    private k2url: string;
    constructor(k2url: string){
        this.k2url = k2url;
    }

}