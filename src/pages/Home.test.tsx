import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '../test/test-utils';
import Home from './Home';

vi.mock('gsap', () => ({
    default: {
        fromTo: vi.fn(),
        set: vi.fn(),
        to: vi.fn(() => ({ pause: vi.fn(), resume: vi.fn() })),
        timeline: vi.fn(() => ({
            to: vi.fn().mockReturnThis(),
            call: vi.fn().mockReturnThis(),
        })),
        registerPlugin: vi.fn(),
    },
}));

vi.mock('gsap/ScrollTrigger', () => ({
    ScrollTrigger: {},
}));

describe('Home', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('renders the hero text GELBE letters', () => {
        render(<Home />);
        expect(screen.getByText('G')).toBeInTheDocument();
        expect(screen.getAllByText('E').length).toBeGreaterThan(0);
        expect(screen.getByText('L')).toBeInTheDocument();
        expect(screen.getByText('B')).toBeInTheDocument();
    });

    it('renders the hero text SEITEN letters', () => {
        render(<Home />);
        expect(screen.getByText('S')).toBeInTheDocument();
        expect(screen.getByText('I')).toBeInTheDocument();
        expect(screen.getByText('T')).toBeInTheDocument();
        expect(screen.getByText('N')).toBeInTheDocument();
    });

    it('renders the yellow dot', () => {
        render(<Home />);
        expect(screen.getByText('.')).toBeInTheDocument();
    });

    it('renders the search bar', () => {
        render(<Home />);
        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toBeInTheDocument();
    });

    it('renders the HomeInfo section', () => {
        render(<Home />);
        expect(screen.getByText('Unsere Top-Angebote')).toBeInTheDocument();
    });

    it('renders the tagline', () => {
        render(<Home />);
        expect(screen.getByText('Finden Sie alles in Ihrer Nähe')).toBeInTheDocument();
    });

    it('search bar is focusable', () => {
        render(<Home />);
        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toBeInTheDocument();
    });
});
