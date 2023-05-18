import {Router} from 'express';
import {getEmployess, createEmployess, updateEmployess, deleteEmployess ,getEmploye} from '../controllers/employess.controller.js';

const router = Router();

router.get('/employees',getEmployess);
router.get('/employees/:id',getEmploye);
router.post('/employees',createEmployess);
router.patch('/employees/:id',updateEmployess);
router.delete('/employees/:id',deleteEmployess);

export default router;