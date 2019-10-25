import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = props => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summaryText}>
                Total: <Text style={styles.amount}>${cartTotalAmount}</Text>
            </Text>
            <Button title="Order Now" />
        </View>
        <View>
            <Text>CART ITEMS</Text>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {

    },
    amount: {

    }
});

export default CartScreen;