/* eslint-disable */
import React, { useState } from "react";
import { Dimensions, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Web3 from "web3";
import styles from './styles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const web3 = new Web3(
    Web3.givenProvider ||
    "https://ropsten.infura.io/v3/5c61f2cfeb084d82ba607cdaaa4148b1"
);

const App = ()=> {
    const [keystore, setKeyStore] = useState(null);

    const createAccount = () => {
        const account = web3.eth.accounts.create();
        console.log("account", account);
        setKeyStore(account)
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.9 }}>
                <Text style={styles.header}>
                    Setup Wallet
                </Text>
            </View>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            {/* <LottieView
                style={styles.lottieContainer}
                source={require('../../animations/wallet.json')}  loop /> */}
            <View style={{ flex: 0.3 }}>
                <TouchableOpacity style={styles.cta}>
                    <Text style={styles.ctaText}>
                        Create a wallet
                    </Text>
                    <View style={styles.icon}>
                        <Icon name="ios-arrow-forward" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cta}>
                    <Text style={styles.ctaText}>
                        Import a wallet
                    </Text>
                    <View style={styles.icon}>
                        <Icon name="ios-arrow-forward" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default App;