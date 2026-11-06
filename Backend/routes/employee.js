import express from "express";
import { loginEmployee, logoutEmployee, registerEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employee.controllers.js';

const router = express.Router();

router.post('/login', loginEmployee);
router.post('/logout', logoutEmployee);
router.post('/register', registerEmployee);
router.get('/employees', getAllEmployees);
router.get('/employees/:employee_id', getEmployeeById);
router.put('/employees/:employee_id', updateEmployee);
router.delete('/employees/:employee_id', deleteEmployee);

export default router;