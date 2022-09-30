import { useFocusEffect } from "@react-navigation/native";
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
	collection,
	getFirestore,
	addDoc,
	query,
	where,
	getDocs,
} from "firebase/firestore";

import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	SafeAreaView,
	FlatList,
} from "react-native";
import { Data } from "./data";
export default function Home({ route, navigation }) {
	const { email } = route.params;
	const [totalPrice, setTotalPrice] = useState(0);
	const [cart, setCart] = useState([]);

	useFocusEffect(
		useCallback(() => {
			const fetchData = async () => {
				try {
					const app = getApp();

					// Initialize Cloud Firestore and get a reference to the service
					const db = getFirestore(app);

					const auth = getAuth();
					const user = auth.currentUser;

					const cartRef = collection(db, "cart");

					const q = query(cartRef, where("user_id", "==", user.uid));

					const querySnapshot = await getDocs(q);
					let total = 0;
					const cartSnapshots = [];
					querySnapshot.forEach((doc) => {
						const cartSnapshot = doc.data();

						cartSnapshots.push(cartSnapshot);
						console.log(cartSnapshot);

						total += Number(cartSnapshot.harga);
					});

					setTotalPrice(total);
					setCart(cartSnapshots);
				} catch (error) {}
			};

			fetchData();
		}, []),
	);

	useEffect(() => {
		console.log("cart", cart);
	}, [cart]);

	const currencyFormat = (num) => {
		return "Rp " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	};

	const updateHarga = async (price, item) => {
		// Initialize Firebase
		const app = getApp();

		// Initialize Cloud Firestore and get a reference to the service
		const db = getFirestore(app);

		const auth = getAuth();
		const user = auth.currentUser;

		try {
			console.log({ price });

			console.log("UpdatPrice : " + price);

			const temp = Number(price) + totalPrice;
			console.log(temp);

			const docRef = await addDoc(collection(db, "cart"), {
				...item,
				user_id: user.uid,
			});
			console.log("Document written with ID: ", docRef.id);

			setTotalPrice(temp);
		} catch (e) {
			console.error("Error adding document: ", e);
		}

		//? #Bonus (10 poin) -- HomeScreen.js --
		//? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
	};
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 16,
				}}>
				<View>
					<Text>Selamat Datang,</Text>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>{email}</Text>
				</View>
				<View>
					<Text>Total Harga:</Text>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						{" "}
						{currencyFormat(totalPrice)}
					</Text>
				</View>
			</View>
			<View style={{ marginBottom: 20, paddingBottom: 60 }}>
				{
					<SafeAreaView>
						<FlatList
							style={{ alignSelf: "center" }}
							numColumns={2}
							data={Data}
							renderItem={({ item, index }) => (
								<>
									<View style={styles.content}>
										<Text style={{ fontSize: 15, fontWeight: "bold" }}>
											{item.title}
										</Text>
										<Image source={item.image} style={styles.image} />

										<Text
											style={{
												flex: 1,
												fontSize: 15,
												fontWeight: "bold",
												padding: 5,
											}}>
											{item.harga}
										</Text>
										{cart.find((cartItem) => cartItem.id === item.id) && (
											<Text>Didalam Keranjang</Text>
										)}

										<Button
											title={"Beli"}
											onPress={() => updateHarga(item.harga, item)}>
											Press Me
										</Button>
									</View>
								</>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
					</SafeAreaView>

					/* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->

            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */
				}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	content: {
		padding: 10,
		margin: 5,
		borderWidth: 1,
		alignItems: "center",
		borderRadius: 5,
		borderColor: "grey",
	},
	item: {},
	image: {
		width: 170,
		height: 200,
		borderRadius: 12,
		marginTop: 10,
	},
});
