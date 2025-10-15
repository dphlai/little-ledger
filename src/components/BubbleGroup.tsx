import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Bubble from './Bubble';

interface BubbleGroupProps {
    title: string;
    options: string[];
    selected: string[];
    onSelectionChange: (selected: string[]) => void;
    style?: ViewStyle;
}

export default function BubbleGroup({
    title,
    options,
    selected,
    onSelectionChange,
    style
}: BubbleGroupProps) {
    const handleBubblePress = (option: string) => {
        const newSelected = selected.includes(option)
            ? selected.filter(item => item !== option) // Remove if already selected
            : [...selected, option]; // Add if not selected

        onSelectionChange(newSelected);
    };

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.bubbleContainer}>
                {options.map((option) => (
                    <Bubble
                        key={option}
                        label={option}
                        selected={selected.includes(option)}
                        onPress={() => handleBubblePress(option)}
                    />
                ))}
            </View>
        </View>
    );
}
}