import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import { Link, router } from "expo-router"
import InputPlace from "../inputPlace/InputPlace";
import { AppContext } from "../../scripts/AppContext";


export default TelaLogin = () => {
    const { user, setUser } = useContext(AppContext)
    const [novaSenha, setNovaSenha] = React.useState('');
    const [confirmarNovaSenha, setConfirmarNovaSenha] = React.useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/user/change_user_password/${user.id}`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "novaSenha": confirmarNovaSenha
                })
            })

            if (response.ok) { // Compare com === para evitar coerção de tipo
                alert("Senha alterada com sucesso");
                router.replace("/telaPerfil");
            } else {
                console.warn("Falha ao alterar senha. Status:", response.status);
            }
        } catch (error) {
            console.error("Erro: ", error)
        }
    }
    return (
        <View style={styles.container}>
             <Pressable onPress={() => router.replace('/telaPerfil')} style={styles.botao_voltar}>
                <Image source={require('../../assets/images/voltar.png')} style={styles.voltar} />
            </Pressable>
            <Text style={styles.title}>𝗮𝗹𝘁𝗲𝗿𝗲 𝘀𝘂𝗮 𝘀𝗲𝗻𝗵𝗮</Text>

            <View style={styles.form}>
                <View>
                    <InputPlace value={novaSenha} onChangeTextHandler={setNovaSenha}  label={"𝖭𝗈𝗏𝖺 𝗌𝖾𝗇𝗁𝖺"} />
                    <InputPlace value={confirmarNovaSenha} onChangeTextHandler={setConfirmarNovaSenha} label={"𝖢𝗈𝗇𝖿𝗂𝗋𝗆𝖺𝗋 𝗇𝗈𝗏𝖺 𝗌𝖾𝗇𝗁𝖺"} />
                </View>
                <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>𝖠𝗅𝗍𝖾𝗋𝖺𝗋</Text></Pressable>
            </View>
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
        gap: 100
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#447D46"
    },
    button: {
        backgroundColor: '#447D46',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    form: {
        backgroundColor: '#90B582',
        borderRadius: 7,
        width: 350,
        height: 270,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao_voltar: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "none",
        padding: 10,
        borderRadius: 5,
    },
})