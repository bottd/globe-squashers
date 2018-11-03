import React from 'react';
import {connect} from 'react-redux';
import './Browse.css';

export function Browse() {
  return (
    <div className="Browse">
      <h1>A browse</h1>
    </div>
  );
}

export const mapStateToProps = state => ({
  proofs: state.proofs,
});

export const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
