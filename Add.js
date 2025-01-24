import React, { useState } from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert, StyleSheet } from 'react-native';

const Add = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        if (!name || !email || !phone) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        let myData = JSON.parse(route.params.datastr);
        let newItem = { name: name, email: email, phone: phone };
        myData.push(newItem);

        fetch('https://jsonhost.com/json/e32b9784fcba445809667116ba94d6f1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'n7g2yoqmpt1sads1qdintzvcshzfn3il',
            },
            body: JSON.stringify(myData),
        })
            .then((response) => {
                if (response.ok) {
                    Alert.alert('Success', 'User added successfully!');
                    navigation.navigate('Home');
                } else {
                    Alert.alert('Error', 'Failed to add user. Please try again.');
                }
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Error', 'An unexpected error occurred.');
            });
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType="phone-pad"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});

export default Add;
