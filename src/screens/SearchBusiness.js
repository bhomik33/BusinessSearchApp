import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import yelpAPI from '../API/yelpAPI';
import { ScrollView } from 'react-native-gesture-handler';
import BusinessList from '../components/BusinessList';



const SearchBusiness = () => {
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('');
    const [businesses, setBusinesses] = useState([]);
    const [error, setErrorMessage] = useState('');

    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
           return business.price === price;
        });
    };

    

const apiSearch = async(businessName, location) => {
        try {
            const response = await yelpAPI.get('/search', {
                params : {
                    term : businessName,
                    location : location,
                    limit : 30
                }
            
             })
           setBusinesses(response.data.businesses);
        }
        catch(e){
           setErrorMessage('Something went wrong');
        }
        
    }
    useEffect(() => {
        apiSearch('chinese', 'Melbourne')
        }, []);
    

    const businessPlaceholder = 'Enter any Business name';
    const locationPlaceholder = "Enter your Location (e.g. Melbourne";

   return (
       <View style= {styles.backgroundStyle}>
            <SearchBar 
                input={businessName}
                setTerm={newTerm => setBusinessName(newTerm)} 
                placeholder = {businessPlaceholder}         
            />
            <SearchBar 
                input={location}
                setTerm={newTerm => setLocation(newTerm)}
                placeholder = {locationPlaceholder}           
            />
            <Button
            style={styles.searchButtonStyle}
            onPress ={() => apiSearch(businessName,location)}
            title="Search"
            type="solid"
            /> 
            <ScrollView>
                <BusinessList results={filterBusinessesByPrice('$')} title="Less Expensive" />
                <BusinessList results={filterBusinessesByPrice('$$')} title="Medium Expensive"/>
                <BusinessList results={filterBusinessesByPrice('$$$')} title="More Expensive" />
            </ScrollView>

       </View>
   )
};


const styles = StyleSheet.create({
    backgroundStyle : {
        width : '100%',
        height : '100%',
        backgroundColor : '#fff',
    },
    searchButtonStyle : {
       marginTop : 15,
       alignItems : 'center',
       marginBottom : 14
    }
   
});

export default SearchBusiness;