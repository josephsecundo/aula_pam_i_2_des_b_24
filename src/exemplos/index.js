import { View, Pressable, Text } from 'react-native';

import styles from './styles';

export default function Exemplos({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplos</Text>

            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex2')}
            >
                <Text style={styles.itens}>Exemplo 2</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex3')}
            >
                <Text style={styles.itens}>Exemplo 3</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex4')}
            >
                <Text style={styles.itens}>Exemplo 4</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex5')}
            >
                <Text style={styles.itens}>Exemplo 5</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex6')}
            >
                <Text style={styles.itens}>Exemplo 6</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex7')}
            >
                <Text style={styles.itens}>Exemplo 7</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Ex8')}
            >
                <Text style={styles.itens}>Exemplo 8</Text>
            </Pressable>
        </View>
    );
}