//import axios from 'axios';
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://169.51.204.190:30299/api/v1/employees/";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()