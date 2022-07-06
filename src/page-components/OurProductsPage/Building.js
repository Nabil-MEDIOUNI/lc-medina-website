import React from 'react';
import PropTypes from 'prop-types';

import { useGLTF } from 'drei';

export default function Building({ building }) {
  const gltf = useGLTF(building, '/draco-gltf');

  return <primitive object={gltf.scene} dispose={null} />;
}
useGLTF.preload('/3d/gv_3d.glb');

Building.propTypes = {
  building: PropTypes.string.isRequired,
};
