import React from 'react';
import { TextInput, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    style?: ViewStyle;
    inputStyle?: TextStyle;
}

export default function Input({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    multiline = false,
    numberOfLines = 1,
    style,
    inputStyle
}: InputProps) {
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[
                    styles.input,
                    multiline && styles.multilineInput,
                    inputStyle
                ]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                numberOfLines={numberOfLines}
                placeholderTextColor="#95a5a6"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#bdc3c7',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: 'white',
    },
    multilineInput: {
        minHeight: 80,
        textAlignVertical: 'top',
    },
});