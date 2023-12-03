import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '@/store/configureStore';
export default function Root() {
    // Set up the auth context and render our layout inside of it.
    return (
        <Provider store={store}>
            <Slot />
        </Provider>
    );
}
