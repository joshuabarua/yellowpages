import { describe, it, expect } from 'vitest';
import { render, screen } from '../test/test-utils';
import Footer from './Footer';

describe('Footer', () => {
    it('renders the brand name', () => {
        render(<Footer />);
        expect(screen.getByText('Gelbe Seiten')).toBeInTheDocument();
    });

    it('renders the tagline', () => {
        render(<Footer />);
        expect(screen.getByText(/Ein Service Ihrer Gelbe Seiten Verlage/i)).toBeInTheDocument();
    });

    it('renders Rechtliches section with all links', () => {
        render(<Footer />);
        expect(screen.getByText('Rechtliches')).toBeInTheDocument();
        expect(screen.getByText('Impressum')).toBeInTheDocument();
        expect(screen.getByText('Datenschutzerklärung')).toBeInTheDocument();
        expect(screen.getByText('Datenschutz-Einstellungen')).toBeInTheDocument();
        expect(screen.getByText('AGB')).toBeInTheDocument();
    });

    it('renders Kontakt section with contact info', () => {
        render(<Footer />);
        expect(screen.getByText('Kontakt')).toBeInTheDocument();
        expect(screen.getByText('support@gelbeseiten.de')).toBeInTheDocument();
        expect(screen.getByText('+49 (0) 40 123 456 789')).toBeInTheDocument();
        expect(screen.getByText('Mo–Fr · 9–18 Uhr')).toBeInTheDocument();
    });

    it('renders copyright notice', () => {
        render(<Footer />);
        expect(screen.getByText(/© 2026 Gelbe Seiten/i)).toBeInTheDocument();
    });

    it('renders social media links', () => {
        render(<Footer />);
        expect(screen.getByText('Twitter')).toBeInTheDocument();
        expect(screen.getByText('LinkedIn')).toBeInTheDocument();
        expect(screen.getByText('Instagram')).toBeInTheDocument();
    });

    it('has correct href on legal links', () => {
        render(<Footer />);
        const impressumLink = screen.getByText('Impressum');
        expect(impressumLink.closest('a')).toHaveAttribute('href', 'https://www.gelbeseiten.de/impressum');
    });
});
