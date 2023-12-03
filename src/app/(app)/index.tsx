import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/features/Auth/authSlice';
import { printObject } from '@/utils/helpers';
export default function Index() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const onLogoutPress = () => {
        dispatch(logout({}));
    };
    printObject('S-A-A-I:user:\n', user);
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View>
                <Text>What?</Text>
            </View>
            <Text
                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    onLogoutPress();
                }}
            >
                Sign Out
            </Text>
        </View>
    );
}
