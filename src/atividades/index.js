import { View, Pressable, Text } from 'react-native';

import styles from './styles';

export default function Atividades({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Atividades</Text>

            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Atv1')}
            >
                <Text style={styles.itens}>Atividade 1</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Atv3')}
            >
                <Text style={styles.itens}>Atividade 3</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Atv4')}
            >
                <Text style={styles.itens}>Atividade 4</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Atv5')}
            >
                <Text style={styles.itens}>Atividade 5</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Atv6')}
            >
                <Text style={styles.itens}>Atividade 6</Text>
            </Pressable>
        </View>
    );
}