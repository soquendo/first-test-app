import { TextInput, View, Image, Text, StyleSheet } from 'react-native';

interface Props {
    searchQuery: string;
    onChangeText (text: string) : void;
    image: string;
    name: string;
}

export const Search = ({ searchQuery, onChangeText }: Props) => {
  return (
    <View style={styles.searchContainer}>
        <TextInput
        style={styles.searchInput}
        placeholder='Search here'
        onChangeText={onChangeText}
        value-={searchQuery}
      />
    </View>
  );
};

export const ContactCard = ({ name, image }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 50, height: 50, borderRadius: 5 }}
      />
      <Text style={{ marginLeft: 10, fontSize: 18 }}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    searchContainer: {
        marginVertical: 20,
    },
    searchInput: {
        paddingHorizontal: 10,
        width: 200,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
    },
});
