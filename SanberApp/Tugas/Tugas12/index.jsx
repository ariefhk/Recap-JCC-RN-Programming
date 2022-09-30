import React, { useEffect, useState } from "react";
import { Button, View, Text, TextInput } from "react-native";

const App = () => {
	// Deklarasi variabel state baru yang kita sebut "count"
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("componentDidMout, dijalankan sekali");
	}, []);

	useEffect(() => {
		console.log("Counter berubah", count);
	}, [count]);

	useEffect(() => {
		console.log("Name berubah", name);
	}, [name]);

	useEffect(() => {
		const timerRef = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => {
			clearInterval(timerRef);
		};
	}, []);

	return (
		<View style={{ justifyContent: "center", flex: 1, paddingHorizontal: 16 }}>
			<Text>Count Increment {count} times</Text>
			<Button
				title="Increment"
				onPress={() => setCount((prevCount) => ++prevCount)}
			/>
			<Text>Name : {name}</Text>
			<TextInput
				value={name}
				onChangeText={setName}
				style={{ borderWidth: 1 }}
			/>
		</View>
	);
};

export default App;
