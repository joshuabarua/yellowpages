import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../test/test-utils';
import Firmenprofil from './Firmenprofil';

vi.mock('@clerk/clerk-react', () => ({
    useUser: () => ({ isLoaded: true, user: { firstName: 'Test' } }),
    SignedIn: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    SignedOut: () => null,
    UserButton: () => null,
}));

vi.mock('../stores/userStore', () => ({
    useUserStore: () => ({
        user: { email: 'test@example.com' },
    }),
}));

describe('Firmenprofil', () => {
    it('renders the page title', () => {
        render(<Firmenprofil />);
        expect(screen.getByText('Firmenprofil')).toBeInTheDocument();
    });

    it('renders the form description', () => {
        render(<Firmenprofil />);
        expect(screen.getByText('Bearbeiten Sie Ihren Eintrag')).toBeInTheDocument();
    });

    it('renders required form fields', () => {
        render(<Firmenprofil />);
        expect(screen.getByText(/Firmenname/)).toBeInTheDocument();
        expect(screen.getByText(/Branche/)).toBeInTheDocument();
        expect(screen.getByText(/Straße/)).toBeInTheDocument();
        expect(screen.getByText(/PLZ/)).toBeInTheDocument();
        expect(screen.getByText(/Stadt/)).toBeInTheDocument();
    });

    it('renders contact fields', () => {
        render(<Firmenprofil />);
        expect(screen.getByText(/Telefon/)).toBeInTheDocument();
        expect(screen.getByText(/E-Mail/)).toBeInTheDocument();
        expect(screen.getByText(/Website/)).toBeInTheDocument();
    });

    it('renders the submit button', () => {
        render(<Firmenprofil />);
        expect(screen.getByRole('button', { name: /Speichern/i })).toBeInTheDocument();
    });

    it('renders back link to dashboard', () => {
        render(<Firmenprofil />);
        const backLink = screen.getByRole('link', { name: /Dashboard/i });
        expect(backLink).toHaveAttribute('href', '/dashboard');
    });
});
