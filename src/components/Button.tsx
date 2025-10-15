import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    style?: ViewStyle;
}

export default function Button({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    style
}: ButtonProps) {
    return (
      <TouchableOpacity
      style={[
          styles.button,
          styles[variant],
          disabled && styles.disabled,
          style
      ]}
      onPress={onPress}
      disabled={disabled}
      >
          <Text style={[styles.text, styles[`${variant}Text`]]}>
              {title}
          </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    primary: {
        backgroundColor: '#3498db',
    },
    secondary: {
        backgroundColor: '#95a5a6',
    },
    danger: {
        backgroundColor: '#e74c3c',
    },
    disabled: {
        backgroundColor: '#bdc3c7',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    primaryText: {
        color: 'white',
    },
    secondaryText: {
        color: 'white',
    },
    dangerText: {
        color: 'white',
    },
});