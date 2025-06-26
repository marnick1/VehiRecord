import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">Welcome to Nativewind!</Text>

            <Link
                href={{
                    pathname: '/details/[id]',
                    params: { id: 'bacon' },
                }}
            >
                View first user details
            </Link>
            <Link
                href={{
                    pathname: '/details/[id]',
                    params: { id: 'cheese' },
                }}
            >
                View second user details
            </Link>

            <Link href="/settings">Go to Settings</Link>
        </View>
    );
}
