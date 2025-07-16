import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../services/EmployeeService';

function EmployeeList({ onEdit }) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this employee?")) {
      await deleteEmployee(id);
      fetchEmployees();
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h3>Employee List</h3>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.role}
            <button onClick={() => onEdit(emp)}>Edit</button>
            <button onClick={() => handleDelete(emp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
