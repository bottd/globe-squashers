import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProofCard from './components/ProofCard';
import './Browse.css';

export function Browse({proofs}) {
  const proofCards = proofs.map(proof => <ProofCard {...proof} />);
  return <div className="Browse">{proofCards}</div>;
}

export const mapStateToProps = state => ({
  proofs: state.proofs,
});

export const mapDispatchToProps = dispatch => ({});

Browse.propTypes = {
  proofs: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
