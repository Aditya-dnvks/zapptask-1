import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';

const PersonalDetails = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      legalName: '',
      phoneNumber: '',
      email: '',
      homeAddress: '',
      city: '',
      country: '',
      postalCode: '',
      languagesKnown: '',
      bio: '',
    }
  });

  const onSubmit = async (data) => {
    try {
      await firestore().collection('personal-details-formdata').add(data);
      navigation.navigate('BankDetails');
      console.log(data);
    } catch (error) {
      console.error('Error saving personal details:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Identify Verification</Text>
      <View style={styles.stepIndicator}>
        <View style={styles.statusBar}>
          <Image style={styles.tickmark} source={require("../../assets/tickmark.png")} />
          <Image style={styles.step} source={require("../../assets/frame_1.png")} />
          <Text style={styles.statusText}> Personal {'\n'} Details</Text>
        </View>

        <View style={styles.statusBar}>
          <Image style={styles.tickmark} source={require("../../assets/tickmark.png")} />
          <Image style={styles.step} source={require("../../assets/frame_2.png")} />
          <Text style={styles.statusText}> Bank {'\n'} Details</Text>
        </View>

        <View style={styles.statusBar}>
          <Image style={styles.tickmark} source={require("../../assets/tickmark.png")} />
          <Image style={styles.step} source={require("../../assets/frame_3.png")} />
          <Text style={styles.statusText}> Government {'\n'} issued ID</Text>
        </View>

        <View style={styles.statusBar}>
          <Image style={styles.tickmark} source={require("../../assets/tickmark.png")} />
          <Image style={styles.step} source={require("../../assets/frame_4.png")} />
          <Text style={styles.statusText}> Terms And {'\n'} Conditions</Text>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Legal Name n ID</Text>
        <Controller
          control={control}
          name="legalName"
          rules={{ required: 'Legal Name is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="First, Middle, Last"
              placeholderTextColor="#aaa"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.legalName && <Text style={styles.error}>{errors.legalName.message}</Text>}

        <Text style={styles.label}>Phone Number</Text>
        <Controller
          control={control}
          name="phoneNumber"
          rules={{
            required: 'Phone Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone Number must be a 10 digit number'
            }
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="+91"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber.message}</Text>}

        <Text style={styles.label}>Email ID</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid Email ID'
            }
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={styles.label}>Home Address</Text>
        <Controller
          control={control}
          name="homeAddress"
          rules={{ required: 'Home Address is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.homeAddress && <Text style={styles.error}>{errors.homeAddress.message}</Text>}

        <View style={styles.row}>
          <View style={styles.halfView}>
            <Text style={styles.label}>City</Text>
            <Controller
              control={control}
              name="city"
              rules={{ required: 'City is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.city && <Text style={styles.error}>{errors.city.message}</Text>}
          </View>
          <View style={styles.halfView}>
            <Text style={styles.label}>Country</Text>
            <Controller
              control={control}
              name="country"
              rules={{ required: 'Country is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.country && <Text style={styles.error}>{errors.country.message}</Text>}
          </View>
        </View>

        <Text style={styles.label}>Postal Code</Text>
        <Controller
          control={control}
          name="postalCode"
          rules={{
            required: 'Postal Code is required',
            pattern: {
              value: /^[0-9]{6}$/,
              message: 'Postal Code must be a 6-digit number'
            }
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.postalCode && <Text style={styles.error}>{errors.postalCode.message}</Text>}

        <Text style={styles.label}>Languages Known</Text>
        <Controller
          control={control}
          name="languagesKnown"
          rules={{ required: 'Languages Known is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.languagesKnown && <Text style={styles.error}>{errors.languagesKnown.message}</Text>}

        <Text style={styles.label}>Bio</Text>
        <Controller
          control={control}
          name="bio"
          rules={{ required: 'Bio is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.textarea}
              placeholder="Maximum 100 Words"
              placeholderTextColor="#aaa"
              value={value}
              onChangeText={onChange}
              multiline={true}
              numberOfLines={4}
              maxLength={100}
            />
          )}
        />
        {errors.bio && <Text style={styles.error}>{errors.bio.message}</Text>}

        <Button title="SAVE & NEXT" onPress={handleSubmit(onSubmit)} color="#4b0082" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 20,
    color: '#6007c4',
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  step: {
    width: 40,
    height: 40,
    marginHorizontal: 25,
    marginBottom: 5,
  },
  statusBar: {
    display: "flex",
    alignItems: "center",
  },
  statusText: {
    color: "#000",
    fontWeight: "800",
    textAlign: "center",
  },
  statusLineContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusDottedLine: {
    height: 2,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#000',
    width: 50,
  },
  tickmark: {
    height: 15,
    width: 15,
    marginBottom: 10,
    display: "none"
  },
  form: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#ccc',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfView: {
    width: '48%',
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
});

export default PersonalDetails;
