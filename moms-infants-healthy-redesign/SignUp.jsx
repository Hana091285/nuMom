import {Image, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from "react";
import loginMainImage from "./login-main-image.png"
import appStyles from './AppStyles'
import Button from "./Button";
import TextBox from "./TextBox.jsx";
import ClickableText from "./ClickableText";
import SignUpInfo from "./SignUpInfo";
import Congratulations from "./Congratulations";
import SignUpAddress from "./SignUpAddress";
import SignUpPassword from "./SignUpPassword";
import SignUpBabyGender from "./SignUpBabyGender";
import Firebase from "./Firebase";


export default class SignUp extends React.Component {
    state = {index: 0, email: null, password: null, fullName: null, dob: null, babyGender: 'unknown'};

    getNextScreen = () => {
        let currentIndex = this.state.index;
        console.log(currentIndex);
        this.setState({index: currentIndex + 1});
    };

    setUserInfo = (keyToValue) => {
        console.log(keyToValue);
        this.setState(keyToValue);
        console.log(this.state)
    };

    signUpAndUploadData = () => {
        let fb = new Firebase();
        console.log(this.state);
        // fb.signUp(this.state.email, this.state.password, this.state.fullName, this.state.dob, this.state.babyGender);
    };


    screens = [
        <Congratulations setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen}/>,
        <SignUpInfo setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen}/>,
        <SignUpPassword setUserInfo={this.setUserInfo} getNextScreen={this.getNextScreen}/>,
        <SignUpBabyGender setUserInfo={this.setUserInfo} getNextScreen={this.signUpAndUploadData}/>
    ];

    render() {
        return this.screens[this.state.index];
    }
};
