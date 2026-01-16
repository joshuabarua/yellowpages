import React from 'react';
import { Link } from 'react-router';
import { useUserStore } from '../stores/userStore';
import { Building2, FileText, Settings, BarChart3, ArrowLeft } from 'lucide-react';

const Dashboard: React.FC = () => {
    const { user } = useUserStore();

    const menuItems = [
        { icon: <Building2 size={20} />, title: 'Firmenprofil', desc: 'Bearbeiten Sie Ihren Eintrag', href: '/dashboard/firmenprofil' },
        { icon: <BarChart3 size={20} />, title: 'Statistiken', desc: 'Aufrufe und Klicks', href: '/dashboard/statistiken' },
        { icon: <FileText size={20} />, title: 'Bewertungen', desc: 'Kundenfeedback verwalten', href: '/dashboard/bewertungen' },
        { icon: <Settings size={20} />, title: 'Einstellungen', desc: 'Konto und Benachrichtigungen', href: '/dashboard/einstellungen' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#feefbc] to-[#faf8f3]">
            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-excon text-[13px]">
                    <ArrowLeft size={14} />
                    Startseite
                </Link>
                <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 mb-8">
                    <div className="flex items-center gap-3">
                        {user?.imageUrl ? (
                            <img src={user.imageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-[#feefbc] flex items-center justify-center font-renade text-[14px] text-gray-700">
                                {user?.firstName?.charAt(0) || 'U'}
                            </div>
                        )}
                        <div>
                            <h1 className="font-renade text-[18px] text-gray-900">
                                Willkommen{user?.firstName ? `, ${user.firstName}` : ''}!
                            </h1>
                            <p className="font-excon text-[12px] text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <h2 className="font-renade text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-3">Firma verwalten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {menuItems.map((item, i) => (
                        <Link
                            key={item.title}
                            to={item.href}
                            className={`flex items-center gap-3 rounded-[16px] p-4 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all ${i === 0 ? 'bg-[#feefbc]' : i === 1 ? 'bg-[#e8f4f8]' : i === 2 ? 'bg-[#fef3e8]' : 'bg-white'}`}
                        >
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/60 text-gray-700">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-renade text-[14px] text-gray-900">{item.title}</h3>
                                <p className="font-excon text-[11px] text-gray-500">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
