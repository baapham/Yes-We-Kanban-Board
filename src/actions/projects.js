import uuid from 'uuid';

const addProject = (
    {
        title = '',
        description = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        title,
        description,
        createdAt
    }
});

const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

const viewProject = (id) => ({
    type: 'VIEW_PROJECT',
    id
})