import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#f8f3e6] w-full">
			<div className="max-w-6xl mx-auto px-[48px] py-[64px]">
				<div className="flex flex-col lg:flex-row justify-between gap-[64px]">
					<div className="flex flex-col gap-[8px]">
						<h2 className="font-renade text-[28px] tracking-[0.02em] text-gray-900 uppercase font-bold">Gelbe Seiten</h2>
						<p className="font-excon text-[13px] text-gray-500 leading-relaxed max-w-[200px]">
							Ein Service Ihrer Gelbe Seiten Verlage
						</p>
					</div>
					<div className="flex flex-row gap-[80px]">
						<div className="flex flex-col gap-[16px]">
							<h3 className="font-renade text-[11px] uppercase tracking-[0.15em] text-gray-400">Rechtliches</h3>
							<ul className="flex flex-col gap-[10px]">
								<li><a href="https://www.gelbeseiten.de/impressum" className="font-excon text-[13px] text-gray-600 hover:text-gray-900 transition-colors no-underline">Impressum</a></li>
								<li><a href="https://www.gelbeseiten.de/datenschutz" className="font-excon text-[13px] text-gray-600 hover:text-gray-900 transition-colors no-underline">Datenschutzerklärung</a></li>
								<li><a href="https://www.gelbeseiten.de/datenschutz-einstellungen" className="font-excon text-[13px] text-gray-600 hover:text-gray-900 transition-colors no-underline">Datenschutz-Einstellungen</a></li>
								<li><a href="https://www.gelbeseiten.de/agb" className="font-excon text-[13px] text-gray-600 hover:text-gray-900 transition-colors no-underline">AGB</a></li>
							</ul>
						</div>
						<div className="flex flex-col gap-[16px]">
							<h3 className="font-renade text-[11px] uppercase tracking-[0.15em] text-gray-400">Kontakt</h3>
							<ul className="flex flex-col gap-[10px]">
								<li className="font-excon text-[13px] text-gray-600">support@gelbeseiten.de</li>
								<li className="font-excon text-[13px] text-gray-600">+49 (0) 40 123 456 789</li>
								<li className="font-excon text-[13px] text-gray-600">Mo–Fr · 9–18 Uhr</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-[48px] pt-[24px] border-t border-gray-200 flex flex-row justify-between items-center">
					<p className="font-excon text-[12px] text-gray-400">© 2026 Gelbe Seiten. Alle Rechte vorbehalten.</p>
					<div className="flex flex-row gap-[24px]">
						<a href="https://twitter.com/gelbeseiten" className="font-excon text-[12px] text-gray-400 hover:text-gray-600 transition-colors no-underline">Twitter</a>
						<a href="https://www.linkedin.com/company/gelbe-seiten" className="font-excon text-[12px] text-gray-400 hover:text-gray-600 transition-colors no-underline">LinkedIn</a>
						<a href="https://www.instagram.com/gelbeseiten" className="font-excon text-[12px] text-gray-400 hover:text-gray-600 transition-colors no-underline">Instagram</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
