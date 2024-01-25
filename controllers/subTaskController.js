const SubTask = require('../models/subTaskModel');

exports.createSubTask = async (req, res) => {
  try {
    const { task_id , user_id} = req.body;

    const newSubTask = await SubTask.create({
      task_id,
      user_id,
      status: 0,
    });

    res.json({ message: 'SubTask created successfully', subtask: newSubTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateSubTask = async (req, res) => {
  try {
    const { status } = req.body;
    const { subtask_id } = req.params;

    const updatedSubTask = await SubTask.findByIdAndUpdate(
      subtask_id,
      { status },
      { new: true }
    );

    res.json({ message: 'SubTask updated successfully', subtask: updatedSubTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteSubTask = async (req, res) => {
  try {
    const { subtask_id } = req.params;

    const deletedSubTask = await SubTask.findByIdAndDelete(
      subtask_id,
      { deleted_at: Date.now() },
      { new: true }
    );

    res.json({ message: 'SubTask deleted successfully', subtask: deletedSubTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllUserSubTasks = async (req, res) => {
  try {
    const { task_id, user_id } = req.query;
    
    const query = task_id ? { task_id, user_id } : { user_id };
    const subTasks = await SubTask.find(query);
    res.json({ subTasks });  // This was missing
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
