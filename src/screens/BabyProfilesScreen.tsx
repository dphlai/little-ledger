import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from "../components";

interface BabyProfilesScreenProps {
    navigation: any;
}

export default function BabyProfilesScreen({ navigation }: BabyProfilesScreenProps) {
    return (
        <View style={styles.container}>
            <Card style={styles.headerCard}>
                <Text style={styles.title}>Baby profiles</Text>
                <Text style={styles.subtitle}>Manage your little ones</Text>
            </Card>

            <Card style={styles.contentCard}>
                <Text style={styles.placeholderText}>
                    No baby profiles yet. Add your first baby to get started!
                </Text>
            </Card>

            <Button
                title="Back to Home"
                onPress={() => navigation.goBack()}
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
    contentCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    placeholderText: {
        fontSize: 16,
        color: '#95a5a6',
        textAlign: 'center',
        lineHeight: 24,
    },
});