import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import InputPlace from "./inputPlace/InputPlace";
import { router } from "expo-router"; // Importação do router

export default TelaCadastro = () => {

    const [name, setName] = React.useState('');
    const [surname, setSurName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [password, setPassword] = React.useState('');

    const fetchData = async () => {
        try {
            console.log(name, email, password)

            const response = await fetch('http://localhost:8000/auth/register', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "nome": name,
                    "sobrenome": surname,
                    "email": email,
                    "nascimento": birthdate,
                    "senha": password
                })
            })
            if (response.status == 201)
                alert('Usuário criado com sucesso')
                router.replace("/");

        } catch (error) {
            console.error("Erro: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()} style={styles.botao_voltar}>
                <Image source={require('../../assets/images/voltar.png')} style={styles.profileImage} />
            </Pressable>

            <Text style={styles.title}>𝗖𝗿𝗶𝗲 𝘀𝘂𝗮 𝗰𝗼𝗻𝘁𝗮</Text>
            <View style={styles.form}>
                <InputPlace style={styles.inputs} value={name} onChangeTextHandler={setName} icon={"https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=447D46"} label={"Nome"} />
                <InputPlace style={styles.inputs} value={surname} onChangeTextHandler={setSurName} icon={"https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=447D46"} label={"Sobrenome"} />
                <InputPlace style={styles.inputs} value={email} onChangeTextHandler={setEmail} icon={"https://img.icons8.com/?size=100&id=85119&format=png&color=447D46"} label={"Email"} />
                <InputPlace style={styles.inputs} value={birthdate} onChangeTextHandler={setBirthdate} icon={"https://img.icons8.com/?size=100&id=tIy8o4gPXjoa&format=png&color=447D46"} label={"Data de nascimento"} />
                <InputPlace style={styles.inputs} value={password} onChangeTextHandler={setPassword} icon={"https://img.icons8.com/?size=100&id=3okL4g49Zmey&format=png&color=447D46"} label={"Senha"} />
            </View>

            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Enviar</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D0FCC7",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        color: "#5732f1"
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#447D46"
    },
    botao_voltar: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "none",
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#447D46',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
})
