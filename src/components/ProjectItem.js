import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ProjectItem = props => {
  return (
    <div className="project-item">
      <Link
        className="project-item-link"
        to={`/project/${props.project.id}`}
      >
        <div>
          <h3 className="project-item-title">
            {props.project.title}
          </h3>
          <p className="project-item-description">
            {props.project.description}
          </p>
          <p className="project-item-createdAt">
            {moment(props.project.createdAt).format('l h:mm A')}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default connect()(ProjectItem);
