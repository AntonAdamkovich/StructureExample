import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Modal, View, StyleSheet } from 'react-native';

// modals
import BaseModal from '../../modals/BaseModal';

// modal types
import * as ModalTypes from '../../../constants/modalTypes';

const mapTypeToModal = {
  [ModalTypes.BASE]: BaseModal,
};

interface Props {
  closeModal(): void;
  modals: {
    type: string
  };
}

export default function ModalsPortal(props: Props) {
  const modal = get(props.modals, '0', {});
  const ModalContent = mapTypeToModal[modal.type] || null;
  const data = get(modal, 'data', {});

  return ModalContent && (
    <Modal
      visible
      transparent
    >
    <View style={styles.contentContainer}>
      <ModalContent
        data={data}
        closeModal={props.closeModal}
      />
    </View>
  </Modal>
);
}

ModalsPortal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modals: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
