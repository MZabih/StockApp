import React from 'react';
import {View, Modal, Button, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../styles/SortOptionsModalStyles';

interface SortOptionsModalProps {
  visible: boolean;
  onSortOptionSelected: (sortOrder: 'asc' | 'desc') => void;
  onClose: () => void;
}
const buttonTitles = ['Ascending', 'Descending'];

const SortOptionsModal: React.FC<SortOptionsModalProps> = ({
  visible,
  onSortOptionSelected,
  onClose,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex: 1}}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {buttonTitles.map((title, index) => (
                <Button
                  key={index}
                  title={title}
                  onPress={() => {
                    const sortOrder =
                      title.toLowerCase() === 'ascending' ? 'asc' : 'desc';
                    onSortOptionSelected(sortOrder);
                    onClose();
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SortOptionsModal;
