import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Star, MessageSquare } from 'lucide-react';

const Bewertungen: React.FC = () => {
    const reviews = [
        { id: 1, author: 'Max M.', rating: 5, text: 'Sehr freundlicher Service, kann ich nur empfehlen!', date: '15.01.2026' },
        { id: 2, author: 'Anna S.', rating: 4, text: 'Gute Qualität, schnelle Lieferung.', date: '12.01.2026' },
        { id: 3, author: 'Peter K.', rating: 5, text: 'Top Beratung und faire Preise.', date: '08.01.2026' },
    ];

    const renderStars = (rating: number) => (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-[#faf8f3]">
            <div className="max-w-3xl mx-auto px-6 py-8">
                <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-excon text-[14px]">
                    <ArrowLeft size={16} />
                    Zurück zum Dashboard
                </Link>
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="font-renade text-[24px] text-gray-900 mb-1">Bewertungen</h1>
                            <p className="font-excon text-[14px] text-gray-500">3 Bewertungen · Durchschnitt 4.7</p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#feefbc] px-4 py-2 rounded-full">
                            <Star size={18} className="fill-yellow-500 text-yellow-500" />
                            <span className="font-renade text-[18px] text-gray-900">4.7</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="border border-gray-100 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-renade text-[14px] text-gray-600">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-renade text-[14px] text-gray-900">{review.author}</p>
                                            <p className="font-excon text-[11px] text-gray-400">{review.date}</p>
                                        </div>
                                    </div>
                                    {renderStars(review.rating)}
                                </div>
                                <p className="font-excon text-[14px] text-gray-600 mt-3">{review.text}</p>
                                <button className="mt-3 flex items-center gap-1 font-excon text-[12px] text-gray-500 hover:text-gray-900">
                                    <MessageSquare size={12} />
                                    Antworten
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bewertungen;
