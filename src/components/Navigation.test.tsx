import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '../test/test-utils';
import { Navigation } from './Navigation';

describe('Navigation', () => {
    beforeEach(() => {
        vi.stubGlobal('scrollY', 0);
    });

    it('renders the logo text', () => {
        render(<Navigation />);
        expect(screen.getByText('Gelbe Seiten.')).toBeInTheDocument();
    });

    it('renders the Firma Login button', () => {
        render(<Navigation />);
        expect(screen.getByText('Firma Login')).toBeInTheDocument();
    });

    it('renders accessibility link', () => {
        render(<Navigation />);
        const accessibilityLink = screen.getByRole('link', { name: /barrierefreiheit/i });
        expect(accessibilityLink).toHaveAttribute('href', 'https://www.gelbeseiten.de/gsservice/barrierefrei');
    });

    it('is hidden initially when scrollY is 0', () => {
        render(<Navigation />);
        const nav = screen.getByRole('navigation');
        expect(nav).toHaveClass('-translate-y-full');
    });

    it('becomes visible when scrolling down', () => {
        render(<Navigation />);
        vi.stubGlobal('scrollY', 50);
        fireEvent.scroll(window);
        const nav = screen.getByRole('navigation');
        expect(nav).toHaveClass('translate-y-0');
    });

    it('hides again when scrolling back to top', () => {
        render(<Navigation />);
        vi.stubGlobal('scrollY', 50);
        fireEvent.scroll(window);
        vi.stubGlobal('scrollY', 0);
        fireEvent.scroll(window);
        const nav = screen.getByRole('navigation');
        expect(nav).toHaveClass('-translate-y-full');
    });
});
