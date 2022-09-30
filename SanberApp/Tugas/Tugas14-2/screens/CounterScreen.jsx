import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
	decrement,
	increment,
	incrementByAmount,
} from "../app/service/counterSlice";

export default function CounterScreen() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const firstName = useSelector((state) => state.counter.person.firstName);

	console.log({ firstName });

	return (
		<View>
			<View>
				<Button title="Increment" onPress={() => dispatch(increment())} />
				<Text>{count}</Text>
				<Button title="Decrement" onPress={() => dispatch(decrement())} />
				<Button
					title="Increment by 23"
					onPress={() => dispatch(incrementByAmount(23))}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
