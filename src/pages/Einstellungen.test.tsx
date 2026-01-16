import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../test/test-utils';
import Einstellungen from './Einstellungen';

vi.mock('@clerk/clerk-react', () => ({
    useUser: () => ({ isLoaded: true, user: { firstName: 'Test' } }),
    useClerk: () => ({ signOut: vi.fn() }),
    SignedIn: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    SignedOut: () => null,
    UserButton: () => null,
}));

vi.mock('../stores/userStore', () => ({
    useUserStore: () => ({
        user: {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            imageUrl: null,
        },
    }),
}));

describe('Einstellungen', () => {
    it('renders the page title', () => {
        render(<Einstellungen />);
        expect(screen.getByText('Einstellungen')).toBeInTheDocument();
    });

    it('renders user info section', () => {
        render(<Einstellungen />);
        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('renders settings sections', () => {
        render(<Einstellungen />);
        expect(screen.getByText('Profil')).toBeInTheDocument();
        expect(screen.getByText('Sicherheit')).toBeInTheDocument();
        expect(screen.getByText('Benachrichtigungen')).toBeInTheDocument();
        expect(screen.getByText('Abrechnung')).toBeInTheDocument();
    });

    it('renders danger zone with sign out button', () => {
        render(<Einstellungen />);
        expect(screen.getByText('Gefahrenzone')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Abmelden/i })).toBeInTheDocument();
    });

    it('renders back link to dashboard', () => {
        render(<Einstellungen />);
        const backLink = screen.getByRole('link', { name: /Dashboard/i });
        expect(backLink).toHaveAttribute('href', '/dashboard');
    });
});
