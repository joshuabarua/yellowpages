import { describe, it, expect } from 'vitest';
import { render, screen } from '../test/test-utils';
import HomeInfo from './HomeInfo';

describe('HomeInfo', () => {
    it('renders the section heading', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Unsere Top-Angebote')).toBeInTheDocument();
    });

    it('renders the subheading', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Entdecken')).toBeInTheDocument();
    });

    it('renders exactly 6 grid items', () => {
        const { container } = render(<HomeInfo />);
        const cards = container.querySelectorAll('.grid > div');
        expect(cards.length).toBe(6);
    });

    it('renders Angebote direkt einholen card with description', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Angebote direkt einholen')).toBeInTheDocument();
        expect(screen.getByText(/Wir helfen Ihnen passende Dienstleister/i)).toBeInTheDocument();
    });

    it('renders Sprachsteuerung mit Alexa card', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Sprachsteuerung mit Alexa')).toBeInTheDocument();
        expect(screen.getByText(/Aktivieren Sie jetzt das neue Alexa Skill/i)).toBeInTheDocument();
    });

    it('renders Finden mit Apple Messages card', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Finden mit Apple Messages')).toBeInTheDocument();
    });

    it('renders Firmeneintrag erstellen card', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Firmeneintrag erstellen')).toBeInTheDocument();
        expect(screen.getByText(/Steigern Sie Ihre Sichtbarkeit/i)).toBeInTheDocument();
    });

    it('renders Termin-Buchungstool card', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Termin-Buchungstool')).toBeInTheDocument();
    });

    it('renders Werbung card', () => {
        render(<HomeInfo />);
        expect(screen.getByText('Werbung')).toBeInTheDocument();
        expect(screen.getByText(/Online Werbelösungen/i)).toBeInTheDocument();
    });

    it('has proper section structure', () => {
        const { container } = render(<HomeInfo />);
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
        expect(section).toHaveClass('bg-[#faf8f3]');
    });
});
