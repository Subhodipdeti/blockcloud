import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


async function getUserDetails() {
    try {
        let userDetails = JSON.parse(await AsyncStorage.getItem('@blockchain_user'));
        return userDetails
    } catch (e) {
        console.log(e)
    }
}

async function setUserDetails(data) {
    try {
        await AsyncStorage.setItem('@blockchain_user', JSON.stringify(data));
    } catch (e) {
        console.log(e)
    }
}

async function setWalletVerified(isVerified) {
    try {
        await AsyncStorage.setItem('@blockchain_user_isverifiedwallet', isVerified);
    } catch (e) {
        console.log(e)
    }
}

async function getWalletVerified() {
    try {
       let userBalance = await AsyncStorage.getItem('@blockchain_user_isverifiedwallet');
       return userBalance;
    } catch (e) {
        console.log(e)
    }
}

export {
    getUserDetails,
    setUserDetails,
    setWalletVerified,
    getWalletVerified,
}

