const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const connection = require('../db/connection');
const { getTasks, updateTask, deleteTask, addTask } = require('../models/usersModel');

describe('Tasks tests', () => {
  let connectionStub;

  beforeEach(() => {
    connectionStub = sinon.stub(connection, 'execute');
  });

  afterEach(() => {
    connectionStub.restore();
  });

  it('should get all tasks', async () => {
    const mockTasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
    connectionStub.resolves(mockTasks);

    const tasks = await getTasks();
    expect(tasks).to.deep.equal(mockTasks);
    expect(connectionStub.calledWith('SELECT * FROM tasks')).to.be.true;
  });

  it('should update a task', async () => {
    const mockTask = { id: 1, title: 'Updated Task', description: 'Updated Description', status: 'done' };
    await updateTask(mockTask);
    expect(connectionStub.calledWith('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [mockTask.title, mockTask.description, mockTask.status, mockTask.id])).to.be.true;
  });

  it('should delete a task', async () => {
    const mockCode = { id: 1 };
    await deleteTask(mockCode);
    expect(connectionStub.calledWith('DELETE FROM tasks WHERE id = ?', [mockCode.id])).to.be.true;
  });

  it('should add a task', async () => {
    const mockTask = { userId: 1, title: 'New Task', description: 'New Description', status: 'todo' };
    await addTask(mockTask);
    expect(connectionStub.calledWith('INSERT INTO tasks (user_id, title, description, status) VALUES (?, ?, ?, ?)', [mockTask.userId, mockTask.title, mockTask.description, mockTask.status])).to.be.true;
  });
});
