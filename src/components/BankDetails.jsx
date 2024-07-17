import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';

const BankDetails = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const accountNumber = watch("accountNumber");

    const onSubmit = async (data) => {
        try {
            await firestore().collection('banking-details-formdata').add(data);
            navigation.navigate('FinalPage');
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
                    <View style={styles.hideTickmark}></View>
                    <Image style={styles.step} source={require("../../assets/frame_2.png")} />
                    <Text style={styles.statusText}> Bank {'\n'} Details</Text>
                </View>

                <View style={styles.statusBar}>
                    <View style={styles.hideTickmark}></View>
                    <Image style={styles.step} source={require("../../assets/frame_3.png")} />
                    <Text style={styles.statusText}> Government {'\n'} issued ID</Text>
                </View>

                <View style={styles.statusBar}>
                    <View style={styles.hideTickmark}></View>
                    <Image style={styles.step} source={require("../../assets/frame_4.png")} />
                    <Text style={styles.statusText}> Terms And {'\n'} Conditions</Text>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Bank Name</Text>
                <Controller
                    control={control}
                    rules={{ required: 'Bank Name is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="bankName"
                    defaultValue=""
                />
                {errors.bankName && <Text style={styles.error}>{errors.bankName.message}</Text>}

                <Text style={styles.label}>Account Holder Name</Text>
                <Controller
                    control={control}
                    rules={{ required: 'Account Holder Name is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="As per bank records"
                            placeholderTextColor="#aaa"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="accountHolderName"
                    defaultValue=""
                />
                {errors.accountHolderName && <Text style={styles.error}>{errors.accountHolderName.message}</Text>}

                <Text style={styles.label}>Account Type</Text>
                <Controller
                    control={control}
                    rules={{ required: 'Account Type is required' }}
                    render={({ field: { onChange, value } }) => (
                    <View style={styles.inputContainer}>
                        <Picker
                            selectedValue={value}
                            style={styles.picker}
                            onValueChange={(itemValue) => onChange(itemValue)}
                        >
                            <Picker.Item label="Select Account Type" value="" />
                            <Picker.Item label="Savings Account" value="Savings Account" />
                            <Picker.Item label="Current Account" value="Current Account" />
                            <Picker.Item label="Fixed Deposit Account" value="Fixed Deposit Account" />
                            <Picker.Item label="Recurring Deposit Account" value="Recurring Deposit Account" />
                        </Picker>
                    </View>

                    )}
                    name="accountType"
                    defaultValue=""
                />
                {errors.accountType && <Text style={styles.error}>{errors.accountType.message}</Text>}

                <Text style={styles.label}>Account Number</Text>
                <Controller
                    control={control}
                    rules={{
                        required: 'Account Number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Account Number must be a number'
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="accountNumber"
                    defaultValue=""
                />
                {errors.accountNumber && <Text style={styles.error}>{errors.accountNumber.message}</Text>}

                <Text style={styles.label}>Confirm Account Number</Text>
                <Controller
                    control={control}
                    rules={{
                        required: 'Confirm Account Number is required',
                        validate: (value) => value === accountNumber || 'Account Numbers do not match'
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="confirmAccountNumber"
                    defaultValue=""
                />
                {errors.confirmAccountNumber && <Text style={styles.error}>{errors.confirmAccountNumber.message}</Text>}

                <Text style={styles.label}>Bank Transit Number</Text>
                <Controller
                    control={control}
                    rules={{
                        required: 'Bank Transit Number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Bank Transit Number must be a number'
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="bankTransitNumber"
                    defaultValue=""
                />
                {errors.bankTransitNumber && <Text style={styles.error}>{errors.bankTransitNumber.message}</Text>}

                <Text style={styles.label}>Institution Number</Text>
                <Controller
                    control={control}
                    rules={{
                        required: 'Institution Number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Institution Number must be a number'
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="institutionNumber"
                    defaultValue=""
                />
                {errors.institutionNumber && <Text style={styles.error}>{errors.institutionNumber.message}</Text>}

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
    tickmark: {
        height: 15,
        width: 15,
        marginBottom: 10,
    },
    hideTickmark: {
        height: 15,
        width: 15,
        marginBottom: 10,
    },
    stepIndicator: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    step: {
        width: 40,
        height: 40,
        marginBottom: 5,
        marginHorizontal: 25
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
    statusLineContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusLine: {
        height: 2,
        backgroundColor: '#6007c4',
        width: 25,
        margin: 0
    },
    statusDottedLine: {
        height: 2,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#000',
        width: 25,
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
    picker:{
        fontSize: 16,
        color: '#000',        
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
    },
    error: {
        color: 'red',
        marginBottom: 15,
    },
});

export default BankDetails;
