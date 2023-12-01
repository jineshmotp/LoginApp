// TimeModal.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TimeModal = ({ isVisible,timeslotes, onClose, onSelectTime }) => {
  

  return (
    <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Select Time</Text>
        {timeslotes.map((time, index) => (
          <TouchableOpacity key={index} onPress={() => onSelectTime(time)}>
            <Text style={styles.timeOption}>{time.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end', // Align the modal at the bottom
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: wp('2%'),
    borderTopRightRadius: wp('2%'),
    padding: wp('5%'),
    position: 'absolute',
    bottom: 0,
    width: '100%', // Make sure the modal covers the entire width
  },
  modalTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  timeOption: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  closeButton: {
    fontSize: wp('4%'),
    color: 'blue',
    marginTop: hp('2%'),
  },
});

export default TimeModal;
