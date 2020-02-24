import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

const Dashboard = () => {
  const [addEditTaskIsOpen, setEditTaskIsOpen] = useState(false);
  const openEditTaskModal = () => {
    setEditTaskIsOpen(true);
  };

  const closeEditTaskModal = () => {
    setEditTaskIsOpen(false);
  };

  return (
    <div>
      <button onClick={openEditTaskModal}>Add a Project</button>
      <ProjectForm
        modalIsOpen={addEditTaskIsOpen}
        openModal={openEditTaskModal}
        closeModal={closeEditTaskModal}
        title={'Add a Project'}
        buttonText={'Add'}
      />
      <ProjectList />
      This is the main menu page.
    </div>
  );
};

export default Dashboard;
