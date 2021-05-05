import React from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {withNavigation} from 'react-navigation';

const BusinessList = ({results,title ,navigation}) => {
    return (
        <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
        data={results}
        keyExtractor={result => result.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
            return (
                <TouchableOpacity>
                    <View style={styles.viewStyle}>
                    <Image source={{ uri : item.image_url ? item.image_url : null}} style={styles.image} />
                    <Text style={styles.nameStyle} >{item.name}</Text>
                    <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
                    </View>
                </TouchableOpacity>     
            ) 
    }}
    />
    </View>
    )
};

const styles = StyleSheet.create({
    viewStyle : {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center'
    },
    nameStyle : {
        fontWeight : 'bold'
    },
    titleStyle : {
        fontWeight : 'bold',
        fontSize : 20,
        marginVertical : 15,
        marginLeft : 10
    },
    image : {
       width : 150,
       height : 150,
       borderRadius : 77,
       marginBottom : 5,
       marginHorizontal : 10
    }
})

export default BusinessList;