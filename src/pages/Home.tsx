import { Search, ChevronDown } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import gsap from 'gsap';
import HomeInfo from '../components/HomeInfo';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [isExpanded, setIsExpanded] = useState(false);
	const heroRefs = [useRef<HTMLHeadingElement>(null), useRef<HTMLHeadingElement>(null), useRef<HTMLParagraphElement>(null)];
	const searchBarRef = useRef<HTMLDivElement>(null);
	const searchIconRef = useRef<SVGSVGElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const floatingTween = useRef<gsap.core.Tween | null>(null);
	const heroContainerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const container = heroContainerRef.current;
		if (!container) return;

		const letters = container.querySelectorAll('.letter');
		letters.forEach((letter) => {
			const el = letter as HTMLElement;
			const letterRect = el.getBoundingClientRect();
			const letterCenterX = letterRect.left + letterRect.width / 2;
			const letterCenterY = letterRect.top + letterRect.height / 2;
			const distX = e.clientX - letterCenterX;
			const distY = e.clientY - letterCenterY;
			const distance = Math.sqrt(distX * distX + distY * distY);
			const maxDist = 250;
			const intensity = Math.max(0, 1 - distance / maxDist);

			const translateZ = intensity * 50;
			const scale = 1 + intensity * 0.12;
			const rotateX = (distY / maxDist) * -15 * intensity;
			const rotateY = (distX / maxDist) * 15 * intensity;

			el.style.transform = `translateZ(${translateZ}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
			el.style.textShadow = `0 ${intensity * 2}px ${intensity * 4}px rgba(0,0,0,${intensity * 0.08})`;
			el.style.transition = 'transform 0.08s ease-out, text-shadow 0.08s ease-out';
		});
	};

	const handleMouseLeave = () => {
		const container = heroContainerRef.current;
		if (!container) return;
		const letters = container.querySelectorAll('.letter');
		letters.forEach((letter) => {
			const el = letter as HTMLElement;
			el.style.transform = 'translateZ(0) scale(1) rotateX(0deg) rotateY(0deg)';
			el.style.textShadow = 'none';
			el.style.transition = 'transform 0.3s ease-out, text-shadow 0.3s ease-out';
		});
	};

	useEffect(() => {
		gsap.fromTo(
			heroRefs.map((ref) => ref.current),
			{ y: 100, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.6 }
		);

		gsap.set(searchBarRef.current, { y: 60, width: 500, height: 54, opacity: 0 });
		gsap.set(searchIconRef.current, { opacity: 1 });
		gsap.set(searchInputRef.current, { width: 420, opacity: 1, pointerEvents: 'auto' });

		const tl = gsap.timeline({ delay: 1.2 });
		tl.to(searchBarRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
			.to(searchBarRef.current, { width: 54, height: 54, duration: 0.5, ease: 'power2.inOut' }, '+=0.8')
			.to(searchInputRef.current, { width: 0, opacity: 0, pointerEvents: 'none', duration: 0.3 }, '<')
			.to(searchIconRef.current, { marginLeft: 0, duration: 0.3 }, '<')
			.call(() => {
				floatingTween.current = gsap.to(searchBarRef.current, {
					y: -8,
					duration: 1.6,
					yoyo: true,
					repeat: -1,
					ease: 'sine.inOut',
				});
			});
	}, []);

	const expandSearch = () => {
		if (isExpanded) return;
		setIsExpanded(true);
		floatingTween.current?.pause();
		gsap.to(searchBarRef.current, { y: 0, duration: 0.2, ease: 'power2.out' });
		gsap.to(searchBarRef.current, { width: 500, height: 54, justifyContent: 'flex-start', paddingLeft: 16, duration: 0.4, ease: 'power2.out' });
		gsap.to(searchInputRef.current, { width: 440, opacity: 1, pointerEvents: 'auto', duration: 0.4, ease: 'power2.out' });
		setTimeout(() => searchInputRef.current?.focus(), 300);
	};

	const collapseSearch = () => {
		if (!isExpanded) return;
		setIsExpanded(false);
		gsap.to(searchInputRef.current, { width: 0, opacity: 0, pointerEvents: 'none', duration: 0.3, ease: 'power2.in' });
		gsap.to(searchBarRef.current, { width: 54, height: 54, justifyContent: 'center', paddingLeft: 0, duration: 0.3, ease: 'power2.in' });
		floatingTween.current?.resume();
	};

	return (
		<div className="flex flex-col min-h-screen">
			<section className="animated-gradient flex flex-col flex-1 items-center justify-around p-4 lg:p-8 min-h-screen relative">
				<div
					ref={heroContainerRef}
					className="flex flex-col items-center hero-text-magnetic mt-[80px] select-none cursor-default"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					<div className="text-bulge-shadow">
						<h1 ref={heroRefs[0]} className="font-renade uppercase text-[102px] font-extrabold text-gray-900 tracking-[30px] leading-none">
							<span className="letter">G</span>
							<span className="letter">E</span>
							<span className="letter">L</span>
							<span className="letter">B</span>
							<span className="letter">E</span>
						</h1>
					</div>
					<div className="flex flex-row items-baseline justify-center mt-[-40px]">
						<div className="text-bulge-shadow">
							<h1 ref={heroRefs[1]} className="font-renade uppercase text-[102px] font-extrabold text-gray-900 tracking-[30px] leading-none">
								<span className="letter">S</span>
								<span className="letter">E</span>
								<span className="letter">I</span>
								<span className="letter">T</span>
								<span className="letter">E</span>
								<span className="letter">N</span>
							</h1>
						</div>
						<p ref={heroRefs[2]} className="font-renade text-[180px] font-extrabold text-yellow-400 leading-none ml-2">
							.
						</p>
					</div>
				</div>
				<div className="relative flex flex-col items-center mt-[50px]">
					<div
						ref={searchBarRef}
						className="flex items-center justify-center bg-[#fbfaf4] rounded-full shadow overflow-hidden border border-gray-300 cursor-pointer"
						onClick={expandSearch}
						tabIndex={0}>
						<Search size={24} className="text-[#171616] shrink-0" ref={searchIconRef} />
						<input
							ref={searchInputRef}
							type="text"
							placeholder={isExpanded ? 'Restaurants, Ärzte, Handwerker...' : ''}
							className="font-excon bg-transparent outline-none border-0 text-[16px] opacity-0 w-0 pointer-events-none ml-[12px]"
							onKeyDown={(e) => e.key === 'Enter' && navigate('/suche')}
							onBlur={collapseSearch}
						/>
					</div>
				</div>
				<div className="flex bottom-[5px] flex flex-col items-center w-full justify-center gap-3">
					<p className="font-excon text-[14px] text-gray-600 tracking-wide">
						Finden Sie alles in Ihrer Nähe
					</p>
					<div className="bounce-chevron">
						<ChevronDown size={24} className="text-gray-500" />
					</div>
				</div>
			</section>
			<HomeInfo />
		</div>
	);
};

export default Home;
