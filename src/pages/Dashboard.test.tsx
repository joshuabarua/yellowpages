import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../test/test-utils';
import Dashboard from './Dashboard';

vi.mock('@clerk/clerk-react', () => ({
    useUser: () => ({ isLoaded: true, user: { firstName: 'Test', lastName: 'User' } }),
    SignedIn: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    SignedOut: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    UserButton: () => <div data-testid="user-button">UserButton</div>,
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

describe('Dashboard', () => {
    it('renders the back link to home', () => {
        render(<Dashboard />);
        expect(screen.getByText('Startseite')).toBeInTheDocument();
    });

    it('renders menu cards', () => {
        render(<Dashboard />);
        expect(screen.getByText('Firmenprofil')).toBeInTheDocument();
        expect(screen.getByText('Statistiken')).toBeInTheDocument();
        expect(screen.getByText('Bewertungen')).toBeInTheDocument();
        expect(screen.getByText('Einstellungen')).toBeInTheDocument();
    });

    it('renders navigation links to subpages', () => {
        render(<Dashboard />);
        const firmenprofilLink = screen.getByRole('link', { name: /Firmenprofil/i });
        expect(firmenprofilLink).toHaveAttribute('href', '/dashboard/firmenprofil');
    });

    it('renders user avatar placeholder', () => {
        render(<Dashboard />);
        expect(screen.getByText('T')).toBeInTheDocument();
    });
});
