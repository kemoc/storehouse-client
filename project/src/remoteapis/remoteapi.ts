import {HttpHeaders} from "@angular/common/http";

export const remoteapi = {
  // Not in use
  storehouse: {
    baseURL: "http://storehouse-api.local/storehouse/api/rest"
  }
};

// If using Proxy then endpoint without domain.
export const endpoint = '/storehouse/api/rest';
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
