import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, TextInput } from "react-native";
import { Icon } from "react-native-elements"
import * as Speech from "expo-speech";

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.input = React.createRef();
        this.state = {
            word: ""
        }
    }

    convert() {
        this.state.word ? (
            Speech.VoiceQuality.Enhanced,
            Speech.speak(this.state.word))
            :
            // (Speech.speak("Paehele type toh kar lae"))
            Speech.speak("There is nothing to speak, first type something in the input panel")
    }

    render() {
        return (
            <SafeAreaView style={styles.main}>
                <StatusBar barStyle="light-content" backgroundColor={"#444"} />
                <View style={styles.inputCont}>
                    <TextInput multiline
                        maxLength={500}
                        style={styles.inputBox} placeholder="Enter Word Here"
                        keyboardType="default"
                        contextMenuHidden={true}
                        ref={this.input}
                        onChangeText={(data) => {
                            this.setState({
                                word: data,
                            });
                        }} />
                </View>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity style={{
                        backgroundColor: "rgba(255, 0, 0, 0)",
                        width: 55,
                        heigth: 50,
                        borderRadius: 50,
                        alignSelf: "flex-end",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        transform: [{ translateY: -90 }, { translateX: -30 }],
                        position: "absolute"
                    }}
                        onPress={() => {
                            this.input.current.clear();
                            this.setState({ word: "" })
                        }}>
                        <Icon
                            name='times'
                            type='font-awesome'
                            color='#444'
                        /></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.convert() }}>
                    <Icon
                        name='microphone'
                        type='font-awesome'
                        color='#000'
                        containerStyle={{ paddingRight: 20 }}
                    />
                    <Text>CONVERT</Text>
                </TouchableOpacity>
            </SafeAreaView >)
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#212121",
        flex: 1
    }, inputBox: {
        height: 70,
        width: 320,
        backgroundColor: "#fff",
        borderRadius: 30,
        margin: 10,
        alignSelf: "center",
        textAlign: "center"
    }, inputCont: {
        backgroundColor: "#fff",
        borderRadius: 30,
        margin: 30
    }, buttonStyle: {
        width: 160,
        height: 60,
        borderRadius: 30,
        margin: 30,
        backgroundColor: "#eeaa66",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center",
    }
})