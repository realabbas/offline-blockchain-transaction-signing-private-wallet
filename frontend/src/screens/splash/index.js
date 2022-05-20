/* eslint-disable */
import LottieView from 'lottie-react-native';
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const item = (focusWord, sentence) => {
    return (<View style={styles.textContainer}>
        <Text style={styles.text}>
            <Text style={styles.focusText}>
                {focusWord}
            </Text>
            {sentence}
        </Text>
    </View>)
}

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
            <Swiper showsPagination={false} autoplay autoplayTimeout={5} loop style={{}}>
                {item("Secure", " way to \nsign transactions on Ethereum")}
                {item("Keep", " your keys absolutely private offline")}
                {item("No contact", " with Internet while\nsigning transactions")}
            </Swiper>

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