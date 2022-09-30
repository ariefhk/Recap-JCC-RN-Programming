import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";

export default function Register({ navigation }) {
	// const dipatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(false);

	const submit = () => {
		const Data = {
			email,
			password,
		};
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				console.log(user);
				// ...

				// dipatch(
				// 	login({
				// 		token: password,
				// 		email: email,
				// 	}),
				// );
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..

				console.error(errorCode, errorMessage);
			});

		// console.log(Data);

		// if (password === "12345678") {
		// 	setIsError(false);
		// 	console.log("Login Benar");
		// 	dipatch(
		// 		login({
		// 			token: password,
		// 			email: email,
		// 		}),
		// 	);
		// 	// navigation.navigate("Home", {
		// 	// 	email: email,
		// 	// });
		// } else {
		// 	console.log("Login Salah");
		// 	setIsError(true);
		// }
	};
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>== Register ==</Text>
			<Image
				style={{ height: 150, width: 150 }}
				source={require("./assets/logo.jpg")}
			/>
			<View>
				<TextInput
					style={{
						borderWidth: 1,
						paddingVertical: 10,
						borderRadius: 5,
						width: 300,
						marginBottom: 10,
						paddingHorizontal: 10,
					}}
					placeholder="Masukan email"
					value={email}
					onChangeText={(value) => setEmail(value)}
				/>
				<TextInput
					style={{
						borderWidth: 1,
						paddingVertical: 10,
						borderRadius: 5,
						width: 300,
						marginBottom: 10,
						paddingHorizontal: 10,
					}}
					placeholder="Masukan Password"
					value={password}
					onChangeText={(value) => setPassword(value)}
				/>
				<Button onPress={submit} title="Register" />
				<Button onPress={() => navigation.navigate("Login")} title="Login" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
});
