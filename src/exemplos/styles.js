import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    container: {
        paddingTop: 20, 
        alignItems: 'center',         
    }, 
    titulo: {
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#7F0000', 
        marginBottom: 20,
    }, 
    botao: {
        borderBottomWidth: 2, 
        borderBottomColor: '#000', 
        padding: 5, 
        margin: 10, 
        width: '70%'
    },  
    itens: {
        fontSize: 18, 
        textAlign: 'center',
    },
});

export default styles;