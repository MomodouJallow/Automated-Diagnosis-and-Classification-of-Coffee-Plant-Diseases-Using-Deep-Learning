import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/logo.jpeg';
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../Firebase/Config";

const navigation = useNavigation()
useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user) {
            navigation.navigate("Home")
        }
    })
    return unsubscribe
}, [])

const handleSignUp = ()=> {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Registered in with:',user.email);
        })
        .catch(error => alert(error.message))
}

const handleLogin = () => {
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Logged in with:',user.email);
        })
        .catch(error => alert(error.message))

}

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
        // validate user

        navigation.navigate('Home');
    }

    const onForgotpasswordPressed = () => {
        console.warn('onForgotpasswordPressed');

       // navigation.navigate('');
    }

    const onSignUpPressed = () => {
        //console.warn('onSignUpPressed');

        navigation.navigate('SignUp');
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {styles.root}>
            <Image source={Logo} style= {[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

            <Inputs placeholder= "Username" value={username} setValue={setUsername}/>
            <Inputs placeholder= "Password" value={password} setValue={setPassword} secureTextEntry/>

            <Button text="Sign in" onPress={handleLogin}/>
            <Button text="Forgot password" onPress={onForgotpasswordPressed} type="TERTIARY"/>

            <Button text="Don't have an account? Create one" onPress={handleSignUp} type="TERTIARY"/>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    },
});
export default Signin