import {API_REQUEST_METHOD} from "./types/api-reguest-method";
import apiInstance from "./api-instance";

function createApiReguest<T extends any>(endpoint: string, method: API_REQUEST_METHOD.DELETE):Promise<T>
function createApiReguest<T extends any>(endpoint: string, method: API_REQUEST_METHOD.POST, config?: { data: Record<string, any> }):Promise<T>
function createApiReguest<T extends any>(endpoint: string, method: API_REQUEST_METHOD.GET, config?: { params?: Record<string, any> }):Promise<T>
async function createApiReguest(endpoint: string, method:API_REQUEST_METHOD, config?:any) {
  switch (method) {

    case API_REQUEST_METHOD.GET:
      return await apiInstance.get(endpoint,{ params: config?.params }).then(data => data.data);

    case API_REQUEST_METHOD.POST:
      return await apiInstance.post(endpoint, config.data).then(data => data.data);

    case API_REQUEST_METHOD.DELETE:
      return await apiInstance.delete(endpoint).then(data => data.data);

    default:
      return await apiInstance.get(endpoint,{ params: config?.params }).then(data => data.data);
  }
}

export default createApiReguest;
