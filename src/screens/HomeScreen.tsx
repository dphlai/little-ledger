import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card } from  '../components';

interface HomeScreenProps {
    navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Card style={styles.welcomeCard}>
                <Text style={styles.title}>Little Ledger</Text>
                <Text style={styles.subtitle}>Welcome back!</Text>
            </Card>

            <View style={styles.buttonContainer}>
                <Button
                    title="View baby profiles"
                    onPress={() => navigation.navigate('BabyProfiles')}
                    variant="primary"
                />

                <Button
                    title="Log today's activities"
                    onPress={() => navigation.navigate('DailyLogs')}
                    variant="primary"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    welcomeCard: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#7f8c8d',
    },
    buttonContainer: {
        gap: 15,
    },
});