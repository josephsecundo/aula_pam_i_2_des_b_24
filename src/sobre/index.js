import { View, Text, ImageBackground } from 'react-native';

import styles from './styles'; 

import image from '../../assets/expo-rn.png';

export default function Sobre() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
                <Text style={styles.text}>
                    Aula react native com expo.
                </Text>
            </ImageBackground>
        </View>
    );
}