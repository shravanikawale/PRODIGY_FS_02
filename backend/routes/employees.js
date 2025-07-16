const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const auth = require('../middleware/auth');

// ✅ Create new employee
router.post('/', auth, async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// ✅ Get all employees
router.get('/', auth, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// ✅ Get one employee
router.get('/:id', auth, async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ msg: 'Employee not found' });
    res.json(emp);
  } catch (err) {
    res.status(400).json({ msg: 'Invalid ID' });
  }
});

// ✅ Update employee
router.put('/:id', auth, async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// ✅ Delete employee
router.delete('/:id', auth, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
const { body, validationResult } = require('express-validator');

// POST route with validation
router.post(
  '/',
  auth,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('salary').isFloat({ min: 0 }).withMessage('Salary must be a positive number')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  }
);
