import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ProjectItem = props => {
  return (
    <Link to={`/project/${props.project.id}`}>
      <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        <p>
          Created on{' '}
          {moment(props.project.createdAt).format(
            'MMMM Do YYYY h:mm A',
          )}
        </p>
      </div>
    </Link>
  );
};

export default connect()(ProjectItem);
