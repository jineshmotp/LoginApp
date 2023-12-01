import React, { useState,useEffect } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import TextAreaInput from '../../Components/TextAreaInput';
import SelectInput from '../../Components/SelectInput';
import subjects from '../../Constants/subjects';
import modes from '../../Constants/modes';
import timeOptions from '../../Constants/timeOptions';
import TimeModal from '../../Components/TimeModel';
import ButtonInput from '../../Components/ButtonInput';
import { colors } from '../../Constants/colors';
import Toast from 'react-native-root-toast';



import { useDispatch, useSelector } from 'react-redux';
import { userLogoutaction } from '../../Redux/userActions';

import { useRoute, useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const {userIdentificationData,userIdentificationLoading,userIdentificationerror,userLogoutLoading,userLogouterror } = userLogin;


  const [btnStatus, setBtnStatus] = useState(1);
  const [placeData, setPlaceData] = useState(null);
  const [problemData, setProblemData] = useState(null);
  const [subjectData, setSubjectData] = useState({
    subjectText: 'Select A Subject',
    subjectId: -1,
  });
  const [modeData, setModeData] = useState({
    modeText: 'Mode of Counselling',
    modeId: -1,
  });
  const [timeData, setTimeData] = useState({
    timeText: 'Your best time to connect',
    timeId: -1,
  });
  const [modalData, setModalData] = useState(null);
  const [modalDataText, setModalDataText] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalNumber, setModalNumber] = useState(0);
  const [timemodalVisible, setTimemodalVisible] = useState(false);

 

  const BackBtnPress = () => {
    navigation.goBack();
  };

  const OnchangePlace = (txt) => {
    setPlaceData(txt);
    console.log(txt);
  };

  const OnchangeProblem = (txt) => {
    setProblemData(txt);
  };

  const OnclickSubject = () => {
    console.log('Button pressed!');
  };

  const OnclickMode = () => {
    console.log('Button pressed!');
  };

  const OnclickTime = () => {
    console.log('Button pressed!');
  };

  const toggleModal = (idx, txtval) => {
    if (idx === 0) {
      setModalData(null);false
      setModalNumber(0);
    }

    if (idx === 1) {
      setModalData(subjects);
      setModalNumber(1);
    }
    if (idx === 2) {
      setModalData(modes);
      setModalNumber(2);
    }

    setModalDataText(txtval);
    setModalVisible(!isModalVisible);
  };

  const toggleTimeModal = () => {
    setTimemodalVisible(!timemodalVisible);
  };

  const handleSubjectSelection = (item) => {
    setModalVisible(!isModalVisible);

    setSubjectData({
      ...subjectData,
      subjectText: item.title,
      subjectId: item.id,
    });
  };

  const handleModeSelection = (item) => {
    setModalVisible(!isModalVisible);

    setModeData({
      ...modeData,
      modeText: item.title,
      modeId: item.id,
    });
  };

  const handleSelectTime = (item) => {
    setTimeData({
      ...timeData,
      timeText: item.title,
      timeId: item.id,
    });
    toggleTimeModal();
  };

  const handleAppointmentPress = async () => {
    setBtnStatus(1);
  };

  const handleEmergencyPress = async () => {
    setBtnStatus(2);
  };

  const handleButtonPress = async () => {
    if (!subjectData || !modeData || !timeData || !placeData || !problemData) {
      let message = 'Enter all fields';

      Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        textStyle: {
          fontSize: wp('4%'), // Adjust font size based on screen width
        },
      });
    } else {
      // Handle your submit logic here
    }
  };

  const LogoutBtnPress = async() => {
   
    await dispatch(userLogoutaction());
    
  };

  // useEffect(() => {
  //   if(userLogoutLoading === true)
  //   {  
  //      console.log('Logout successsfull',userLogoutLoading) ;  
  //      navigation.navigate('AuthStack');
  //   } 
  // }, [userLogoutLoading]);

  // useEffect(() => {
  //   if(userIdentificationData === false)
  //   {  
  //      console.log('Registration successsfull',userIdentificationData) ;  
  //      navigation.navigate('AuthStack');
  //   } 
  // }, [userIdentificationData]);

  return (
    <ImageBackground source={require('../../Images/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.HeaderView}>
        <Header LogoutBtnPress={LogoutBtnPress} BackBtnPress={BackBtnPress} />
      </View>

      <SafeAreaView style={styles.Container}>
        <View style={styles.headerButtonView}>
          <ButtonInput
            styless={{
              width: wp('40%'),
              ...(btnStatus === 1
                ? { backgroundColor: colors.btnSelectionBg }
                : { backgroundColor: colors.btnBackground }),
            }}
            contentStyle={{ height: hp('7%') }}
            labelStyle={{
              fontSize: hp('2.5%'),
              color: btnStatus === 1 ? colors.white : colors.fontColor,
              fontWeight: 'bold',
            }}
            onPress={handleAppointmentPress}
            label="Appointment"
            iconP="no"
          />

          <ButtonInput
            styless={{
              width: wp('40%'),
              ...(btnStatus === 2
                ? { backgroundColor: colors.btnSelectionBg }
                : { backgroundColor: colors.btnBackground }),
            }}
            contentStyle={{ height: hp('7%') }}
            labelStyle={{
              fontSize: hp('2.5%'),
              color: btnStatus === 2 ? colors.white : colors.fontColor,
              fontWeight: 'bold',
            }}
            onPress={handleEmergencyPress}
            label="Emergency"
            iconP="no"
          />
        </View>

        {btnStatus == 1 ? (
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => toggleModal(1, 'Select A Subject')}>
              <SelectInput label={subjectData.subjectText} secure={false} iconName="angle-down" onChangeText={OnclickSubject} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleModal(2, 'Mode of Counselling')}>
              <SelectInput label={modeData.modeText} secure={false} iconName="angle-down" onChangeText={OnclickMode} />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleTimeModal}>
              <SelectInput label={timeData.timeText} secure={false} iconName="angle-down" onChangeText={OnclickTime} />
            </TouchableOpacity>

            <Input label="Place" secure={false} iconName="no" onChangeText={OnchangePlace} />
            <TextAreaInput label="Briefly tell us your problem.. Type here" onChangeText={OnchangeProblem} />

            <ButtonInput
              styless={styles.submitButton}
              contentStyle={{ height: hp('7%') }}
              labelStyle={{ fontSize: hp('2.5%'), color: colors.fontColor, fontWeight: 'bold' }}
              onPress={handleButtonPress}
              label="Submit"
              iconP="no"
            />

            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{modalDataText}</Text>
                  <FlatList
                    data={modalData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => (modalNumber === 1 ? handleSubjectSelection(item) : handleModeSelection(item))}
                      >
                        <Text style={styles.subjectItem}>{item.title}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity onPress={() => toggleModal(0, 'close')}>
                    <Text style={styles.closeButton}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TimeModal isVisible={timemodalVisible} timeslotes={timeOptions} onClose={toggleTimeModal} onSelectTime={handleSelectTime} />
          </View>
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  HeaderView: {
    flex: 0.1, // Adjust the flex value to allocate less space to the header
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'), // Add some padding to the Container
  },

  headerButtonView: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textView: {
    flexDirection: 'column',
    marginBottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: wp('80%'),
    padding: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('2%'),
  },
  modalTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  subjectItem: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  closeButton: {
    fontSize: wp('4%'),
    color: 'blue',
    marginTop: hp('2%'),
  },
  submitButton: {
    width: wp('50%'),
    backgroundColor: colors.btnBackground,
    marginTop: hp('2%'), // Adjust the margin top for mobile
    marginBottom: hp('5%'), // Adjust the margin bottom for mobile
  },
});

export default HomeScreen;
