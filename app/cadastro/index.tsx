import React from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import { Box, Button, TextField, Typography } from '@mui/material';
import cadastroBackground from '../../assets/cadastro/cadastro-background.png';
import logo from '../../assets/cadastro/logo.png';

export default function RegisterPage() {
    return (
        <ImageBackground
            source={cadastroBackground}
            style={styles.background}
            imageStyle={styles.image}
        >
            <View style={styles.overlay}>
                <Image style={styles.logo} source={logo} />
                <Box style={styles.fundo} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                    <Box marginTop={7}>
                        <Typography style={styles.inputtext}>Nome completo</Typography>
                        <TextField size='small' style={styles.input}></TextField>
                    </Box>
                    <Box marginTop={5}>
                        <Typography style={styles.inputtext}>Email</Typography>
                        <TextField size='small' style={styles.input}></TextField>
                    </Box>
                    <Box marginTop={5}>
                        <Typography style={styles.inputtext}>Nome de usuário</Typography>
                        <TextField size='small' style={styles.input}></TextField>
                    </Box>
                    <Box marginTop={5}>
                        <Typography style={styles.inputtext}>Criar senha</Typography>
                        <TextField type='password' size='small' style={styles.input}></TextField>
                    </Box>
                    <Box marginTop={5}>
                        <Typography style={styles.inputtext}>Confirmar senha</Typography>
                        <TextField type='password' size='small' style={styles.input}></TextField>
                    </Box>
                    <Box marginTop={6}>
                        <Button style={styles.button}>Cadastrar</Button>
                    </Box>
                    <Box marginTop={2}>
                        <Typography style={styles.label}>Possuo cadastro &gt;</Typography>
                    </Box>
                </Box>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: 5,
        zIndex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        resizeMode: 'cover',
    },
    overlay: {
        top: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundo: {
        width: 370,
        height: 700,
        backgroundColor: 'white',
        opacity: 1,
        borderRadius: 20,
    },
    input: {
        width: 300,
    },
    inputtext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',

    },
    button: {
        width: 188,
        height: 45,
        backgroundColor: '#34CB3E',
        borderRadius: '40px',
        color: 'white'
    },
    label: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }

});