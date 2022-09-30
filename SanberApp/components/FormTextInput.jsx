import { StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FormTextInput = ({ label, type }) => {
	return (
		<View style={styles.form}>
			<Text style={styles.formLabel}>{label}</Text>
			<View style={styles.formTextInputContainer}>
				<TextInput style={styles.formTextInput} />
				{type === "password" && (
					<MaterialCommunityIcons name="eye" size={24} color="black" />
				)}
			</View>
		</View>
	);
};

export default FormTextInput;

const styles = StyleSheet.create({
	form: {},
	formLabel: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#4f4f4f",
		marginBottom: 5,
	},
	formTextInputContainer: {
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 10,
		borderRadius: 10,
		flexDirection: "row",
	},
	formTextInput: {
		flex: 1,
	},
});
