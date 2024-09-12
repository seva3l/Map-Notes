import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Logout from './Logout';
import { Colors } from '@constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import PlusSVG from '@assets/icons/Plus';

interface Props{
    openCreateModal:()=>void
}

const Header = ({openCreateModal}:Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <View>
            <Text style={styles.welcomeText}>Bonsoir!</Text>
            <TouchableOpacity style={styles.button} onPress={openCreateModal}>
                <PlusSVG/>
                <Text style={styles.btnText}>New Note</Text>
            </TouchableOpacity>
            </View>
            <Logout/>
        </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 21,
        paddingVertical: 35,
        backgroundColor: Colors.primary,
    },
    welcomeText:{
        fontSize: moderateScale(22),
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    itemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button:{
        flexDirection:'row',
        gap: 2,
        paddingVertical: 4,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    btnText:{
        color: Colors.light.text,
    },
});
