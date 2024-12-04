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

            <Text style={styles.title}>Bem-vindo! (˶˃ ᵕ ˂˶) .ᐟ.ᐟ</Text>
            <View style={styles.form}>
            <Text style={styles.subtitle}>Login</Text>
                <InputPlace value={email} onChangeTextHandler={setEmail} icon={"https://img.icons8.com/?size=100&id=85119&format=png&color=d798ff"} label={"Email"} />
                <InputPlace value={password} onChangeTextHandler={setPassword} icon={"https://img.icons8.com/?size=100&id=3okL4g49Zmey&format=png&color=d798ff"} label={"Senha"} />
                <Link href={"/telaCadastro"} style={styles.link}><Text style={styles.link_text}>Não possui uma conta? Cadastre-se</Text></Link>
            </View>
            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Login</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e5bfff",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: -30,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#d798ff",
        marginBottom: -20,
        width: 450,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#ffffff",
        width: 400,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#945FB6',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: -10
    },
    link_text: {
        fontSize: 15,
        marginTop: 100,
        color: '#FFFFFF'
    },
    link: {
        marginTop: 15
    },
    form: {
        backgroundColor: '#945FB6',
        borderRadius: 7,
        width: 350,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});