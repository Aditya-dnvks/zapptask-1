import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const FinalPage = () => (  
    <View style={styles.container}>
        <Text style={styles.successText}>
            Details Stored in Backend Firebase succesfully
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 10
    },
    successText:{
        color: "#000",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default FinalPage;
