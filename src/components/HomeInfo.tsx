import React from 'react';
import {Gift, Users, MessageCircle, Mic, Building, Calendar, Megaphone, Star, Search} from 'lucide-react';

const gridItems = [
	{
		icon: <Gift size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Angebote direkt einholen',
		desc: 'Wir helfen Ihnen passende Dienstleister zu finden und schnell Angebote zu erhalten.',
		link: '#',
	},
	{
		icon: <Mic size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Sprachsteuerung mit Alexa',
		desc: 'Suchen wird jetzt noch einfacher. Aktivieren Sie jetzt das neue Alexa Skill von Gelbe Seiten.',
		link: '#',
	},
	{
		icon: <MessageCircle size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Finden mit Apple Messages',
		desc: 'Mit der eigenen Nachrichten-App Unternehmen bei Gelbe Seiten finden.',
		link: '#',
	},
	{
		icon: <Building size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Firmeneintrag erstellen',
		desc: 'Steigern Sie Ihre Sichtbarkeit und registrieren Sie jetzt kostenlos Ihr Unternehmen.',
		link: '#',
	},
	{
		icon: <Calendar size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Termin-Buchungstool',
		desc: 'Bestätigen Sie Terminanfragen online und nutzen Sie die automatisierte Terminvergabe.',
		link: '#',
	},
	{
		icon: <Megaphone size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Werbung',
		desc: 'Finden Sie passende Online Werbelösungen für Ihr Unternehmen.',
		link: '#',
	},
	{
		icon: <Star size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Unsere Top-Angebote',
		titleLines: ['Unsere', 'Top-Angebote'],
		desc: '',
		link: '#',
	},
	{
		icon: <Users size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Vorteile für Sie',
		titleLines: ['Vorteile', 'für Sie'],
		desc: '',
		link: '#',
		cta: '',
	},
	{
		icon: <Search size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Vorteile für Firmen',
		desc: '',
		link: '#',
	},
];

const HomeInfo: React.FC = () => {
	return (
		<section className="w-full bg-[#faf8f3] py-[80px]">
			<div className="max-w-6xl mx-auto px-[48px]">
				<h2 className="font-renade text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-[12px]">Entdecken</h2>
				<h1 className="font-renade text-[32px] text-[#323131] mb-[48px]">Unsere Top-Angebote</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{gridItems.slice(0, 6).map((item, i) => (
						<div
							key={i}
							className="group flex flex-col bg-[#fff] rounded-[16px] p-[22px] min-h-[80px] border-gray-100 border-[0.5px]  hover:translate-y-[-10px] transition-all ease-in-out duration-200">
							<div className="flex items-center gap-[10px]">
								<div className="flex items-center justify-center h-[44px] w-[44px] min-w-[44px] rounded-[12px] bg-[#faf8f3] transition-colors">
									{React.cloneElement(item.icon, {className: 'h-[42px] w-[42px] text-gray-700'})}
								</div>
								<div className="flex flex-col gap-[0px]">
									<div className="text-[18px] text-[#111010] leading-none">
										{item.titleLines ? (
											<div className="flex flex-col text-pretty">
												{item.titleLines.map((line) => (
													<h1 className={'font-renade'} key={line}>
														{line}
													</h1>
												))}
											</div>
										) : (
											item.title
										)}
									</div>
									{item.desc && <p className="font-excon text-[12px] text-gray-500 leading-relaxed mt-[16px]">{item.desc}</p>}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeInfo;
