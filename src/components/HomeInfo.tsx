import React, { useEffect, useRef, useState } from 'react';
import { Gift, Users, MessageCircle, Mic, Building, Calendar, Megaphone, Star, Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					let start = 0;
					const duration = 2000;
					const increment = target / (duration / 16);
					const timer = setInterval(() => {
						start += increment;
						if (start >= target) {
							setCount(target);
							clearInterval(timer);
						} else {
							setCount(Math.floor(start));
						}
					}, 16);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [target]);

	return <span ref={ref}>{count.toLocaleString('de-DE')}{suffix}</span>;
};

const gridItems = [
	{
		icon: <Gift size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Angebote direkt einholen',
		desc: 'Wir helfen Ihnen passende Dienstleister zu finden und schnell Angebote zu erhalten.',
		link: 'https://www.gelbeseiten.de/angebote',
	},
	{
		icon: <Mic size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Sprachsteuerung mit Alexa',
		desc: 'Suchen wird jetzt noch einfacher. Aktivieren Sie jetzt das neue Alexa Skill von Gelbe Seiten.',
		link: 'https://www.gelbeseiten.de/alexa',
	},
	{
		icon: <MessageCircle size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Finden mit Apple Messages',
		desc: 'Mit der eigenen Nachrichten-App Unternehmen bei Gelbe Seiten finden.',
		link: 'https://www.gelbeseiten.de/apple-messages',
	},
	{
		icon: <Building size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Firmeneintrag erstellen',
		desc: 'Steigern Sie Ihre Sichtbarkeit und registrieren Sie jetzt kostenlos Ihr Unternehmen.',
		link: 'https://www.gelbeseiten.de/eintrag',
	},
	{
		icon: <Calendar size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Termin-Buchungstool',
		desc: 'Bestätigen Sie Terminanfragen online und nutzen Sie die automatisierte Terminvergabe.',
		link: 'https://www.gelbeseiten.de/terminbuchung',
	},
	{
		icon: <Megaphone size={18} className="w-8 h-8 text-yellow-600 mb-2" />,
		title: 'Werbung',
		desc: 'Finden Sie passende Online Werbelösungen für Ihr Unternehmen.',
		link: 'https://www.gelbeseiten.de/werbung',
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

const cardColors = [
	'from-yellow-100 to-yellow-50',
	'from-blue-50 to-cyan-50',
	'from-orange-50 to-amber-50',
	'from-green-50 to-emerald-50',
	'from-purple-50 to-violet-50',
	'from-pink-50 to-rose-50',
];

const HomeInfo: React.FC = () => {
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (cardsRef.current) {
			const cards = cardsRef.current.querySelectorAll('.info-card');
			gsap.fromTo(
				cards,
				{ y: 60, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: cardsRef.current,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				}
			);
		}
	}, []);

	return (
		<section className="w-full bg-[#faf8f3] py-[80px]">
			<div className="max-w-6xl mx-auto px-[48px]">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-[48px]">
					<div>
						<h2 className="font-renade text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-[12px]">Entdecken</h2>
						<h1 className="font-renade text-[32px] text-[#323131]">Unsere Top-Angebote</h1>
					</div>
					<div className="flex gap-[48px] md:gap-[80px] mt-6 md:mt-0">
						<div className="text-right">
							<p className="font-renade text-[28px] text-gray-900"><AnimatedCounter target={4000000} suffix="+" /></p>
							<p className="font-excon text-[11px] text-gray-500">Einträge</p>
						</div>
						<div className="text-right">
							<p className="font-renade text-[28px] text-gray-900"><AnimatedCounter target={500000} suffix="+" /></p>
							<p className="font-excon text-[11px] text-gray-500">Bewertungen</p>
						</div>
					</div>
				</div>
				<div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{gridItems.slice(0, 6).map((item, i) => (
						<div
							key={i}
							className={`info-card group flex flex-col bg-gradient-to-br ${cardColors[i]} rounded-[16px] p-[22px] min-h-[80px] border border-white/50 hover:translate-y-[-10px] hover:shadow-lg transition-all ease-in-out duration-200`}>
							<div className="flex items-center gap-[10px]">
								<div className="flex items-center justify-center h-[44px] w-[44px] min-w-[44px] rounded-[12px] bg-white/60 transition-colors group-hover:bg-white">
									{React.cloneElement(item.icon, { className: 'h-[42px] w-[42px] text-gray-700' })}
								</div>
								<div className="flex flex-col gap-[0px]">
									<div className="font-renade text-[18px] text-[#111010] leading-none">
										{item.titleLines ? (
											<div className="flex flex-col text-pretty">
												{item.titleLines.map((line) => (
													<h1 className={'font-renade uppercase'} key={line}>
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
