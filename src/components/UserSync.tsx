import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useUserStore } from '../stores/userStore';

export const UserSync: React.FC = () => {
    const { user, isLoaded } = useUser();
    const { setUser, setLoaded, clearUser } = useUserStore();

    useEffect(() => {
        setLoaded(isLoaded);
        if (isLoaded && user) {
            setUser({
                id: user.id,
                email: user.primaryEmailAddress?.emailAddress || '',
                firstName: user.firstName,
                lastName: user.lastName,
                imageUrl: user.imageUrl,
            });
        } else if (isLoaded && !user) {
            clearUser();
        }
    }, [user, isLoaded, setUser, setLoaded, clearUser]);

    return null;
};
