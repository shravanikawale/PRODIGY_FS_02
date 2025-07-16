import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../utils/EmployeeService';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.role}
            <button onClick={() => handleDelete(emp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
