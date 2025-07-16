import { useState } from 'react';
import { addEmployee, updateEmployee } from '../services/EmployeeService';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';

function Dashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSave = async (employeeData) => {
    if (employeeData._id) {
      await updateEmployee(employeeData._id, employeeData);
    } else {
      await addEmployee(employeeData);
    }
    setSelectedEmployee(null);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <EmployeeForm onSave={handleSave} selectedEmployee={selectedEmployee} />
      <EmployeeList onEdit={setSelectedEmployee} />
    </div>
  );
}

export default Dashboard;
try {
  await addEmployee(employee);
} catch (err) {
  const errors = err.response?.data?.errors;
  if (errors) {
    alert(errors.map(e => e.msg).join('\n'));
  } else {
    alert("Error saving employee");
  }
}
