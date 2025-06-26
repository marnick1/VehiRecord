import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import '@/styles/global.css';

function RootLayoutInner() {
    const insets = useSafeAreaInsets();
    return (
        <View
            className="bg-black flex-1"
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <StatusBar style="light" backgroundColor="black" translucent={false} />
            <View className="bg-white flex-1">
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(tabs)" />
                </Stack>
            </View>
        </View>
    );
}

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <RootLayoutInner />
        </SafeAreaProvider>
    );
}
