import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import InputPlace from "./inputPlace/InputPlace";
import { Link, router } from "expo-router";
import { AppContext } from "../scripts/AppContext";

export default TelaLogin = () => {
    const { user, setUser } = useContext(AppContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const getUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/user/get_user/${id}`);
            const json = await response.json();
            setUser(json);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchData = async () => {
        try {
            console.log(name, email, password);

            const response = await fetch('http://localhost:8000/auth/login', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "senha": password
                })
            });

            if (response.status == 200) {
                const data = await response.json();
                getUser(data.user_id);
                router.replace("/telaHome");
            }
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.title}>𝗕𝗲𝗺-𝘃𝗶𝗻𝗱𝗼! (˶˃ ᵕ ˂˶) .ᐟ.ᐟ</Text>
            <View style={styles.form}>
                <Text style={styles.subtitle}>𝗟𝗼𝗴𝗶𝗻</Text>
                <InputPlace value={email} onChangeTextHandler={setEmail} icon={"https://img.icons8.com/?size=100&id=85119&format=png&color=447D46"} label={"𝗘𝗺𝗮𝗶𝗹"} />
                <InputPlace value={password} onChangeTextHandler={setPassword} icon={"https://img.icons8.com/?size=100&id=3okL4g49Zmey&format=png&color=447D46"} label={"𝗦𝗲𝗻𝗵𝗮"} />
                <Link href={"/telaCadastro"} style={styles.link}><Text style={styles.link_text}>𝖭𝖺̃𝗈 𝗉𝗈𝗌𝗌𝗎𝗂 𝗎𝗆𝖺 𝖼𝗈𝗇𝗍𝖺? 𝖢𝖺𝖽𝖺𝗌𝗍𝗋𝖾-𝗌𝖾</Text></Link>
            </View>
            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>𝖫𝗈𝗀𝗂𝗇</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D0FCC7", 
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 8,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: "#447D46", 
        marginBottom: 12,
        width: 500,
        textAlign: 'center',
        height: 60,
    },
    subtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FFF     faFFF",
        width: 400,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#447D46', 
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: -10,
        border: '4px solid #90B582',
    },
    link_text: {
        fontSize: 15,
        marginTop: 100,
        color: '#fff' 
    },
    link: {
        marginTop: 15
    },
    form: {
        backgroundColor: '#90B582', 
        borderRadius: 7,
        width: 350,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid #447D46',
    }
});
