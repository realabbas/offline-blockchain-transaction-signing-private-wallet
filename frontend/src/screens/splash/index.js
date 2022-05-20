/* eslint-disable */
import LottieView from 'lottie-react-native';
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Splash = () => {
    return (
        <View style={styles.container}>
            <LottieView
                style={styles.lottieContainer}
                source={require('../../animations/splash.json')} autoPlay loop />
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    <Text style={styles.focusText}>
                        Secure
                    </Text> way to
                    {'\n'}
                    sign transactions
                    {'\n'}
                    on Ethereum
                </Text>
            </View>
            <TouchableOpacity style={styles.cta}>
                <Text style={styles.ctaText}>
                    Let's start
                </Text>
                <View style={styles.icon}>
                    <Icon name="ios-arrow-forward" size={20} color="#000" />
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default Splash;