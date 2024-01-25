const express = require('express');
const router = express.Router();
const subTaskController = require('../controllers/subTaskController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/create', authenticateToken, subTaskController.createSubTask);
router.put('/update/:subtask_id', authenticateToken, subTaskController.updateSubTask);
router.delete('/delete/:subtask_id', authenticateToken, subTaskController.deleteSubTask);
router.get('/get-all', authenticateToken, subTaskController.getAllUserSubTasks);

module.exports = router;
