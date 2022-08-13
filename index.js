const employee = {};

function updateEmployeeWithKeyAndValue (employee, key, value) {
   const employeeId = {...employee};
   employeeId [key] = value;
   return employeeId;
}
 function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee [key] = value;
    return employee;
 }
 function deleteFromEmployeeByKey (employee,key){
    const deleteEmployee = {};
     delete employee.key;
    return deleteEmployee;
 }
 function destructivelyDeleteFromEmployeeByKey (employee,key){
    const deleteEmployeeDestructively = {};
    delete employee[key] ;
    //return deleteEmployeeDestructively;

     return employee;
 }