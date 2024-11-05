import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppColors,
  AppImages,
  normalized,
} from '../../../../../../Utils/AppConstants';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import CreditCardForm, {Button, FormModel} from 'rn-credit-card';
import {FormProvider, useForm} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';

const SponsorViewModal = (props: any) => {
  const [adDuration, setAdDuration] = useState('');
  const [pricePerDay] = useState(3);
  const [grandTotal, setGrandTotal] = useState(0);
  const [selectedPartnership, setSelectedPartnership] = useState('');
  const [status, setStatus] = useState('Sponsored')

  const formMethods = useForm<FormModel>({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  const {handleSubmit, formState} = formMethods;

  function onSubmit(model: FormModel) {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2));
  }

  const calculateTotal = (days: number) => {
    const total = days * pricePerDay;
    setGrandTotal(total);
  };

  const handleDurationChange = (days: string) => {
    setAdDuration(days);
    calculateTotal(Number(days));
  };

  return (
    <Modal transparent visible={true}>
      <View style={styles.container}>
        <View style={styles.ModalContainer}>
          <View>
            <View style={styles.Divider1}></View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.imageBackGround}
                onPress={() => {if(status==""){
                  setStatus('Payment')
                }
                else if(status =="Payment"){
                  setStatus('Sponsored')
                }
                else if(status == 'Sponsored'){
                  props?.onClose()
                }}}>
                <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
              </TouchableOpacity>
              <Text style={styles.TextStyle}>{status}</Text>
            </View>

            <View style={styles.Divider}></View>
          </View>
          {status == 'Sponsored' ? <ScrollView contentContainerStyle={styles.container1}>
      <View style={styles.section}>
        <Text style={styles.label}>Paid Partnership</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedPartnership}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedPartnership(itemValue)}
          >
            <Picker.Item label="Select Partnership" value="" />
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
          </Picker>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Choose Ad Duration</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Number of Days"
            value={adDuration}
            keyboardType="numeric"
            onChangeText={handleDurationChange}
            style={styles.input}
          />
          <Text style={styles.daysLabel}>Days</Text>
        </View>
        <View style = {styles.Divider}/>
      </View>

      <View style={styles.section}>
        <Text style={styles.costLabel}>Cost Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Duration</Text>
          <Text>{adDuration ? `(${adDuration} Days)` : '(0 Days)'}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Price per day</Text>
          <Text style={styles.Price}>${pricePerDay}</Text>
        </View>
        <View style = {styles.Divider}/>
        <View style={styles.summaryRow}>
          <Text style={styles.grandTotalLabel}>Grand Total</Text>
          <Text style={styles.grandTotalLabel}>${grandTotal.toFixed(2)}</Text>
        </View>
      </View>
      <View style = {styles.Divider}/>
      <TouchableOpacity 
      onPress={()=>setStatus('Payment')}
      style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
    </ScrollView>
: status == 'Payment' ? 
           <FormProvider {...formMethods}>
  <SafeAreaView style={styles.container2}>
    <ScrollView  
      showsVerticalScrollIndicator={false} 
    >
      <KeyboardAvoidingView
        style={styles.avoider}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <CreditCardForm
          horizontalStart
          overrides={{
            labelText: {
              marginTop: 16,
            },
          }}
        />
      </KeyboardAvoidingView>
      {formState.isValid && (
        <Button
          style={styles.button}
          title={'Pay Now'}
          onPress={()=>{
            handleSubmit(onSubmit)
            setStatus('')
          }}
        />
      )}
    </ScrollView>
  </SafeAreaView>
</FormProvider> :

<View style={styles.container3}>
      <View style={styles.iconContainer}>
      <LinearGradient
        colors={['rgba(255, 99, 71, 0.2)', 'rgba(240, 90, 65, 0.1)','rgba(255, 99, 71, 0.2)']}
        style={styles.backgroundGlow}
      >
        <View style={styles.innerCircle}>
          <Text style={styles.checkmark}>✔</Text>
        </View>
      </LinearGradient>
      </View>

      <Text style={styles.successText}>Payment successful!</Text>
      <Text style={styles.adText}>Your Ad is LIVE now</Text>

      <TouchableOpacity style={styles.checkoutButton}
      onPress={()=>props?.onClose()}>
        <Text style={styles.checkoutText}>Back To Profile</Text>
      </TouchableOpacity>
    </View>}


        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.28)',
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalized(12),
  },
  ModalContainer: {
    height: '85%',
    backgroundColor: AppColors.Colorz.offWhite,
    borderTopLeftRadius: normalized(30),
    borderTopRightRadius: normalized(30),
    padding: 10,
  },
  Arrow: {
    height: 15,
    width: 10,
  },
  imageBackGround: {
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
    marginRight: normalized(50),
  },
  Price: {
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalized(13),
  },
  TextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
    marginLeft: normalized(30),
  },
  Divider: {
    backgroundColor: '#c3c7c4',
    width: '100%',
    height: 1,
    alignSelf: 'center',
    marginVertical: normalized(12),
  },
  Divider1: {
    backgroundColor: '#c3c7c4',
    width: '20%',
    height: 4,
    alignSelf: 'center',
    borderRadius: normalized(20),
  },
  container1: {
    padding: 20,
    flexGrow: 1,
  },
  section: {
    marginBottom: normalized(10),
  },
  label: {
    fontSize: normalized(13),
    marginBottom: normalized(3),
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalized(12),
    paddingHorizontal: normalized(6),
    paddingVertical: normalized(3),
    backgroundColor: '#e0e0e0',
    marginBottom: normalized(5),
  },
  input: {
    flex: 1,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  daysLabel: {
    fontSize: normalized(13),
    marginRight: normalized(5),
    color: AppColors.Colorz.darkBlue,
  },
  dropdownContainer: {},
  picker: {
    height: 50,
  },
  costLabel: {
    fontSize: normalized(14),
    fontFamily: 'Poppins-Medium',
    color: AppColors.Colorz.darkBlue,
    marginBottom: normalized(5),
    marginTop: normalized(-10),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalized(5),
  },
  grandTotalLabel: {
    fontSize: normalized(14),
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.Colorz.darkBlue,
    // marginBottom : normalized(30)
  },
  checkoutButton: {
    backgroundColor: AppColors.Colorz.orange,
    paddingVertical: normalized(10),
    borderRadius: normalized(15),
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  checkoutText: {
    color: AppColors.Colorz.offWhite,
    fontSize: normalized(12),
    fontFamily: 'Poppins-SemiBold',
  },
  container2: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: normalized(20),
  },
  button: {
    margin: normalized(25),
    marginTop: 0,
    borderRadius: normalized(12),
    width: '60%',
    alignSelf: 'center',
    backgroundColor: AppColors.Colorz.orange,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: normalized(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIcon: {
    width: normalized(60),
    height: normalized(60),
    borderRadius: normalized(35),
    backgroundColor: AppColors.Colorz.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 32,
    color: AppColors.Colorz.offWhite
  },
  successText: {
    fontSize : normalized(11),
    fontFamily : 'Poppins-SemiBold',
    color : AppColors.Colorz.darkBlue,
    marginBottom : normalized(5)
  },
  adText: {
    fontSize : normalized(15),
    fontFamily : 'Poppins-SemiBold',
    color :  AppColors.Colorz.darkBlue,
    marginBottom : normalized(20)
  },
  backgroundGlow: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: AppColors.Colorz.orange,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'orange',
    elevation: normalized(30),
  },
});
export default SponsorViewModal;
