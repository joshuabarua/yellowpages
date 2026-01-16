import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '../test/test-utils';
import Home from './Home';

vi.mock('gsap', () => ({
    default: {
        fromTo: vi.fn(),
        set: vi.fn(),
        to: vi.fn(() => ({ pause: vi.fn(), resume: vi.fn() })),
    },
}));

describe('Home', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('renders the hero text GELBE', () => {
        render(<Home />);
        expect(screen.getByText('GELBE')).toBeInTheDocument();
    });

    it('renders the hero text SEITEN', () => {
        render(<Home />);
        expect(screen.getByText('SEITEN')).toBeInTheDocument();
    });

    it('renders the yellow dot', () => {
        render(<Home />);
        expect(screen.getByText('.')).toBeInTheDocument();
    });

    it('renders the search bar', () => {
        render(<Home />);
        const searchInput = screen.getByPlaceholderText('What are you searching for?');
        expect(searchInput).toBeInTheDocument();
    });

    it('renders the HomeInfo section', () => {
        render(<Home />);
        expect(screen.getByText('Unsere Top-Angebote')).toBeInTheDocument();
    });

    it('has correct background color', () => {
        const { container } = render(<Home />);
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('bg-[#feefbc]');
    });

    it('search bar is focusable', () => {
        render(<Home />);
        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toBeInTheDocument();
    });
});
