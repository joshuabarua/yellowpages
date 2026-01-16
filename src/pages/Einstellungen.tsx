import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Bell, Lock, User, CreditCard } from 'lucide-react';
import { useUserStore } from '../stores/userStore';
import { useClerk } from '@clerk/clerk-react';
import { Button } from '../components/ui/button';

const Einstellungen: React.FC = () => {
    const { user } = useUserStore();
    const { signOut } = useClerk();

    const settingsSections = [
        { icon: <User size={20} />, title: 'Profil', desc: 'Name, E-Mail und Profilbild' },
        { icon: <Lock size={20} />, title: 'Sicherheit', desc: 'Passwort und Zwei-Faktor-Authentifizierung' },
        { icon: <Bell size={20} />, title: 'Benachrichtigungen', desc: 'E-Mail- und Push-Benachrichtigungen' },
        { icon: <CreditCard size={20} />, title: 'Abrechnung', desc: 'Zahlungsmethoden und Rechnungen' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#feefbc] to-[#faf8f3]">
            <div className="max-w-lg mx-auto px-6 pt-24 pb-16">
                <Link to="/dashboard" className="inline-flex items-center gap-[8px] text-gray-600 hover:text-gray-900 mb-[24px] font-excon text-[13px]">
                    <ArrowLeft size={14} />
                    Dashboard
                </Link>
                <div className="bg-white rounded-[20px] p-[32px] shadow-sm border border-gray-100 mb-[24px]">
                    <h1 className="font-renade text-[20px] text-gray-900 mb-[4px]">Einstellungen</h1>
                    <p className="font-excon text-[12px] text-gray-500 mb-[24px]">Verwalten Sie Ihr Konto</p>
                    <div className="flex items-center gap-[16px] p-[16px] bg-[#faf8f3] rounded-xl mb-[24px]">
                        {user?.imageUrl ? (
                            <img src={user.imageUrl} alt="Profile" className="w-[48px] h-[48px] rounded-full" />
                        ) : (
                            <div className="w-[48px] h-[48px] rounded-full bg-[#feefbc] flex items-center justify-center font-renade text-[16px] text-gray-700">
                                {user?.firstName?.charAt(0) || 'U'}
                            </div>
                        )}
                        <div>
                            <p className="font-renade text-[14px] text-gray-900">
                                {user?.firstName} {user?.lastName}
                            </p>
                            <p className="font-excon text-[12px] text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        {settingsSections.map((section) => (
                            <button key={section.title} className="flex items-center gap-[16px] p-[16px] border border-gray-100 rounded-xl hover:border-gray-200 hover:bg-gray-50 transition-all text-left w-full">
                                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-lg bg-[#faf8f3] text-gray-600">
                                    {section.icon}
                                </div>
                                <div>
                                    <p className="font-renade text-[13px] text-gray-900">{section.title}</p>
                                    <p className="font-excon text-[11px] text-gray-500">{section.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-[20px] p-[32px] shadow-sm border border-gray-100">
                    <h2 className="font-renade text-[16px] text-gray-900 mb-[16px]">Gefahrenzone</h2>
                    <div className="flex flex-col md:flex-row gap-[12px]">
                        <Button onClick={() => signOut()} variant="outline" className="rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-excon text-[12px]">
                            Abmelden
                        </Button>
                        <Button variant="outline" className="rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-excon text-[12px]">
                            Konto löschen
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Einstellungen;
