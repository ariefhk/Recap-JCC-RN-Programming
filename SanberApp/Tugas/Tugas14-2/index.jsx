import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CounterScreen from "./screens/CounterScreen";

const Tugas14b = () => {
	return (
		<Provider store={store}>
			<StatusBar translucent={false} />
			<CounterScreen />
		</Provider>
	);
};

export default Tugas14b;

const styles = StyleSheet.create({});
