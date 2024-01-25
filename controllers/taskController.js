const Task = require('../models/taskModel');

// 1. Create task
exports.createTask = async (req, res) => {
  try {
    // Extract data from the request
    const { title, description, due_date, user_id } = req.body;
    console.log("task user id",user_id)

    // Create a new task
    const newTask = await Task.create({
      title,
      description,
      due_date,
      user_id,
      priority: calculateTaskPriority(due_date),
      status: 'TODO',
    });

    res.json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Helper function to calculate priority based on due_date
function calculateTaskPriority(due_date) {
  // Implement your logic to calculate priority here
  // Example: prioritize tasks due today with higher priority
  // You can customize this logic based on your requirements
  return due_date === new Date().toISOString().split('T')[0] ? 0 : 1;
}

// 3. Get all user tasks
exports.getAllUserTasks = async (req, res) => {
  const {  user_id } = req.body;

  try {
    
    // Implement your logic for fetching tasks with filters and pagination
    const tasks = await Task.find({ user_id });
    
    res.json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 5. Update task
exports.updateTask = async (req, res) => {
  try {
    const { due_date, status } = req.body;
    const { task_id } = req.params;

    // Update task based on task_id
    const updatedTask = await Task.findByIdAndUpdate(
      task_id,
      { due_date, status },
      { new: true }
    );

    res.json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 7. Delete task (soft deletion)
exports.deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params;

    // Soft delete task based on task_id
    const deletedTask = await Task.findByIdAndUpdate(
      task_id,
      { deleted_at: Date.now() },
      { new: true }
    );

    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
