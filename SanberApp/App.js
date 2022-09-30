import { View, Text, StatusBar } from "react-native";
import React from "react";

import Tugas12 from "./Tugas/Tugas12";
import Tugas13 from "./Tugas/Tugas13";
import Tugas14 from "./Tugas/Tugas14";
import Tugas14b from "./Tugas/Tugas14-2";
import Tugas15 from "./Tugas/Tugas15";
import Quiz3 from "./Quiz3";

// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD_I6tT4KMJ7jX04qXI6m9AHjBsPB5uLDM",
	authDomain: "jcc-batch2.firebaseapp.com",
	projectId: "jcc-batch2",
	storageBucket: "jcc-batch2.appspot.com",
	messagingSenderId: "18340524825",
	appId: "1:18340524825:web:2f6b9da7f02c8900d40b88",
};

// Initialize Firebase
if (!getApps.length) {
	initializeApp(firebaseConfig);
	// console.log(getApps());
}

const App = () => {
	return (
		<>
			<StatusBar translucent={false} />
			{/* <Tugas15 /> */}
			<Quiz3 />
		</>
	);
};

export default App;
