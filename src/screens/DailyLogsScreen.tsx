import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card, Input } from  '../components';

interface DailyLogsScreenProps {
    navigation: any;
}

export default function DailyLogsScreen({ navigation }: DailyLogsScreenProps) {
    return (
        <View style={styles.container}>
            <Card style={styles.headerCard}>
                <Text style={styles.title}>Daily Logs</Text>
                <Text style={styles.subtitle}>Track your baby's day</Text>
            </Card>

            <Card style={styles.formCard}>
                <Input
                    label="Baby's name"
                    placeholder="Enter your baby's name"
                    value=""
                    onChangeText={() => {}}
                />

                <Input
                    label="Today's notes"
                    placeholder="How was your baby's day?"
                    value=""
                    onChangeText={() => {}}
                    multiline
                    numberOfLines={4}
                />
            </Card>

            <Button
                title="Back to home"
                onPress={() => {navigation.goBack()}}
                variant="secondary"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    headerCard: {
        marginBottom: 20,
        alignItems: 'center',
    },
    formCard: {
        flex: 1,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#7f8c8d',
    },
});