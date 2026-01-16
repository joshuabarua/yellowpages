import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Eye, MousePointer, Phone, TrendingUp } from 'lucide-react';

const Statistiken: React.FC = () => {
    const stats = [
        { icon: <Eye size={24} />, label: 'Profilaufrufe', value: '1,247', change: '+12%' },
        { icon: <MousePointer size={24} />, label: 'Website-Klicks', value: '89', change: '+5%' },
        { icon: <Phone size={24} />, label: 'Anrufe', value: '34', change: '+8%' },
        { icon: <TrendingUp size={24} />, label: 'Suchanfragen', value: '456', change: '+15%' },
    ];

    return (
        <div className="min-h-screen bg-[#faf8f3]">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-excon text-[14px]">
                    <ArrowLeft size={16} />
                    Zurück zum Dashboard
                </Link>
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 mb-6">
                    <h1 className="font-renade text-[24px] text-gray-900 mb-2">Statistiken</h1>
                    <p className="font-excon text-[14px] text-gray-500 mb-8">Übersicht der letzten 30 Tage</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-[#faf8f3] rounded-xl p-5">
                                <div className="text-gray-600 mb-3">{stat.icon}</div>
                                <p className="font-renade text-[28px] text-gray-900">{stat.value}</p>
                                <p className="font-excon text-[12px] text-gray-500">{stat.label}</p>
                                <span className="font-excon text-[11px] text-green-600">{stat.change}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                    <h2 className="font-renade text-[18px] text-gray-900 mb-4">Aktivität</h2>
                    <div className="h-48 flex items-center justify-center border border-dashed border-gray-200 rounded-xl">
                        <p className="font-excon text-[14px] text-gray-400">Diagramm-Platzhalter</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistiken;
