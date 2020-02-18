import React from 'react';
import { connect } from 'react-redux';

const ProjectList = props => {
  return (
    <div>
      <h1>Project List</h1>
      {props.projects.length}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectList);
