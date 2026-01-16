import React, { useState } from 'react';
import { Link } from 'react-router';
import { Search as SearchIcon, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('Berlin');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query) {
            window.location.href = `https://www.gelbeseiten.de/suche/${encodeURIComponent(query)}/${encodeURIComponent(location)}`;
        }
    };

    return (
        <div className="min-h-screen bg-[#faf8f3]">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-excon text-[14px]">
                    <ArrowLeft size={16} />
                    Zurück zur Startseite
                </Link>
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                    <h1 className="font-renade text-[32px] text-gray-900 mb-2">Suche</h1>
                    <p className="font-excon text-[14px] text-gray-500 mb-8">Finden Sie Unternehmen in Ihrer Nähe</p>
                    <form onSubmit={handleSearch} className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="font-excon text-[12px] text-gray-600 mb-1 block">Was suchen Sie?</label>
                                <div className="relative">
                                    <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 font-excon text-[14px] focus:outline-none focus:border-gray-400 transition-colors"
                                        placeholder="Restaurants, Ärzte, Handwerker..."
                                    />
                                </div>
                            </div>
                            <div className="md:w-48">
                                <label className="font-excon text-[12px] text-gray-600 mb-1 block">Wo?</label>
                                <div className="relative">
                                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 font-excon text-[14px] focus:outline-none focus:border-gray-400 transition-colors"
                                        placeholder="Stadt oder PLZ"
                                    />
                                </div>
                            </div>
                        </div>
                        <Button type="submit" className="w-full md:w-auto h-12 px-8 rounded-xl bg-[#feefbc] hover:bg-[#f5e4a8] text-gray-900 font-excon font-semibold text-[14px]">
                            Suchen
                        </Button>
                    </form>
                </div>
                <div className="mt-8">
                    <h2 className="font-renade text-[14px] uppercase tracking-[0.1em] text-gray-400 mb-4">Beliebte Kategorien</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Restaurants', 'Ärzte', 'Friseur', 'Autowerkstatt', 'Rechtsanwalt', 'Zahnarzt', 'Elektriker', 'Steuerberater'].map((cat) => (
                            <a
                                key={cat}
                                href={`https://www.gelbeseiten.de/suche/${encodeURIComponent(cat)}/berlin`}
                                className="px-4 py-3 bg-white rounded-xl border border-gray-100 font-excon text-[13px] text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-colors text-center"
                            >
                                {cat}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
