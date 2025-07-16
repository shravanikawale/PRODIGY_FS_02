import { useState, useEffect } from 'react';

function EmployeeForm({ onSave, selectedEmployee }) {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    role: '',
    salary: '',
    doj: '',
    phone: ''
  });

  useEffect(() => {
    if (selectedEmployee) setEmployee(selectedEmployee);
  }, [selectedEmployee]);

  const handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Basic validation
    if (!employee.name || !employee.email) {
      alert("Name and Email are required");
      return;
    }

    onSave(employee);
    setEmployee({ name: '', email: '', department: '', role: '', salary: '', doj: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={employee.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={employee.email} onChange={handleChange} />
      <input name="department" placeholder="Department" value={employee.department} onChange={handleChange} />
      <input name="role" placeholder="Role" value={employee.role} onChange={handleChange} />
      <input name="salary" type="number" placeholder="Salary" value={employee.salary} onChange={handleChange} />
      <input name="doj" type="date" placeholder="Date of Joining" value={employee.doj} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={employee.phone} onChange={handleChange} />
      <button type="submit">{selectedEmployee ? 'Update' : 'Add'} Employee</button>
    </form>
  );
}

export default EmployeeForm;
const handleSubmit = e => {
  e.preventDefault();
  if (!employee.name.trim() || !employee.email.trim()) {
    alert("Name and Email are required");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(employee.email)) {
    alert("Invalid email");
    return;
  }
  if (employee.salary <= 0) {
    alert("Salary must be positive");
    return;
  }

  onSave(employee);
};
  