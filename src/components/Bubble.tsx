import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface BubbleProps {
    label: string;
    selected: boolean;
    onPress: () => void;
    style?: ViewStyle;
}

export default function Bubble({ label, selected, onPress, style }: BubbleProps) {
    return (
      <TouchableOpacity
        style={[
            styles.bubble,
            selected && styles.selectedBubble,
            style
        ]}
        onPress={onPress}
      >
          <Text style={[styles.bubbleText, selected && styles.selectedBubbleText]}>
            {label}
          </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bubble: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        borderColor: '#bdc3c7',
        margin: 4,
    },
    selectedBubble: {
        backgroundColor: '#3498db',
        borderColor: '#2980b9',
    },
    bubbleText: {
        fontSize: 14,
        color: '#2c3e50',
        fontWeight: '500',
    },
    selectedBubbleText: {
        color: 'white',
    },
});