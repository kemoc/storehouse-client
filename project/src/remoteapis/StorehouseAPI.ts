import {remoteapi} from "./remoteapi";

export class StorehouseAPI {
  protected baseURL:string = "";

  constructor () {
    this.baseURL = remoteapi.storehouse.baseURL;
  }

  getAPIBaseURL() {
    return this.baseURL;
  }

  protected getGETItemBaseURL() {

    return this.getAPIBaseURL() + "/item/";
  }
  getGETItemURL(id) {

    return this.getGETItemBaseURL() + "" + id;
  }

  getItemListURL() {

    return this.getGETItemBaseURL() + '/list';
  }

  getItemListURLWithMinAmount(minAmount) {

    return this.getGETItemBaseURL() + '/with_minimum_amount/' + minAmount;
  }

  getItemListURLWithNoAmount() {

    return this.getGETItemBaseURL() + '/with_no_amount';
  }

}
