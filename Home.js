import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#9fd5ea',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,215,0,0.59)',
    },
    button: {
        backgroundColor: '#bfec60',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#ff0000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listStyle: {
        borderWidth: 1,
        borderColor: '#778380',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(147,112,219,0.66)',
    },
    listItemText: {
        fontSize: 16,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        fetch('https://jsonhost.com/json/e32b9784fcba445809667116ba94d6f1', {
            headers: {
                'Authorization': 'n7g2yoqmpt1sads1qdintzvcshzfn3il',
            },
        })
            .then((response) => response.json())
            .then((myJson) => {
                setMyData(myJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleRegistration = () => {
        const newUser = {
            name: username,
            email: email,
            phone: phoneNumber,
        };

        setMyData([...myData, newUser]);

        console.log('New Registration:', newUser);

        setUsername('');
        setEmail('');
        setPhoneNumber('');
    };

    const renderItem = ({ item }) => (
        <View style={styles.listStyle}>
            <Text style={styles.listItemText}>Name: {item.name}</Text>
            <Text style={styles.listItemText}>Email: {item.email}</Text>
            <Text style={styles.listItemText}>Phone: {item.phone}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <FlatList data={myData} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
        </View>
    );
};

export default Home;
