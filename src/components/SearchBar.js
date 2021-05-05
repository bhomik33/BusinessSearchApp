import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import yelpAPI from '../API/yelpAPI';


const searchBusiness = () => {
    
}
const SearchBar = ({input,setTerm,placeholder}) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style= {styles.searchInput}
            placeholder={placeholder}
            value={input}
            onChangeText={newTerm => setTerm(newTerm)}   
            />
            
        
        </View>
    )
};
const styles = StyleSheet.create({ 
    backgroundStyle : {
        display : 'flex',
        flexDirection : 'row',
        backgroundColor : '#e9ecef',
        marginHorizontal : 20,
        marginTop : 15,
        borderRadius : 25,
        height : 45,
        alignItems : 'center'
    },
    searchInput  : {
        flex : 1,
        height : 40,
        marginLeft : 15
    }

});


export default SearchBar;