import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ContactCard } from './ContactCard';
import { StyleSheet } from 'react-native';

const CONTACTS = [
    {
      id: '1',
      name: 'Dennis',
      image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '2',
      name: 'Sweet Dee',
      image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '3',
      name: 'Frank',
      image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '4',
      name: 'Mac',
      image: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];

  const styles = StyleSheet.create({
    TextInput: {
        width: '50%', 
        borderColor: 'black', 
        borderWidth: 1, 
        paddingHorizontal: 10,
        marginVertical: 60
    },
  });

export const ContactList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeContacts, setActiveContacts] = useState(CONTACTS);

    const handleOnPress = (name: string) =>{
        Alert.alert(`You pressed the ${name} row`)
    }

    const renderItem = ({item}: any) => (
        <TouchableOpacity onPress={() => handleOnPress(item.name)}>
            <ContactCard name={item.name} image={item.image} />
        </TouchableOpacity>
    )

    const search = (query: string) => {
        const filtredContacts = CONTACTS.filter((contacts) => 
        contacts.name.toLocaleLowerCase().includes(query.toLowerCase())
        );
        setActiveContacts(filtredContacts);
        setSearchQuery(query)
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Contact Card</Text>
            <TextInput 
            value={searchQuery}
            onChangeText={search}
            placeholder='Search here' 
            style={styles.TextInput}/>

            <FlatList 
            data={activeContacts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />
        </View>
    )
}