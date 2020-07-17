import AbstractApi from './AbstractApi';
import { Config } from '../data/Config';
import { Store } from '../data/Store';
import { EMPLOYEE_LIST } from '../data/GlobalKeys';


class EmployeeApi extends AbstractApi{

    saveEmployee(success, failure, data) {
        this.process(success, failure, "/invoice/employee", this.requestMethod.POST, data);
    }

    getEmployees(success, failure) {
        this.process(success, failure, "/invoice/employee", this.requestMethod.GET);
    }

    process(success, failure, requestUrl, requestMethod, data) {
        let baseUrl = Config.baseUrl;

        let http = this.httpCall(requestUrl, requestMethod, baseUrl);
        let promise = null;
        if (http) {
           promise = data ? http.request({data}) : http.request();
           promise.then((response)=>{
                if (requestMethod !== this.requestMethod.GET) {
                   this.getEmployees();
                   if (success) {
                       success(response.data);
                   }
                } else {
                    Store.storeObjectData(EMPLOYEE_LIST, response.data)
                }
           })
           .catch((error)=>{
               console.log("I am error call ", error, error.response)
               failure(error)
           });
           
        }
    }
}
export default EmployeeApi;