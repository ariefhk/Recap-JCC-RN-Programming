import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(false);

	const submit = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				console.log(user);
				// ...

				navigation.navigate("Home", { email });

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

		//tuliskan coding disini
		//? #Soal No. 1 (15poin) -- LoginScreen.js -- Function LoginScreen
		//? Buatlah sebuah fungsi untuk berpindah halaman hanya jika password yang di input bernilai '12345678'
		//? dan selain itu, maka akan mengubah state isError menjadi true dan tidak dapat berpindah halaman.

		//? #SoalTambahan (+ 5 poin): kirimkan params dengan key => userName dan value => this.state.userName ke halaman Home,
		//? dan tampilkan userName tersebut di halaman Home setelah teks "Hai," -->
		//end coding
	};
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>== Login ==</Text>
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
					placeholder="Masukan Email"
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
				<Button onPress={submit} title="Login" />
				<Button
					onPress={() => navigation.navigate("Register")}
					title="Register"
				/>
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
