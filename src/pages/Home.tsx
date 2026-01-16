import {Search} from 'lucide-react';
import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import HomeInfo from '../components/HomeInfo';

const Home: React.FC = () => {
	const heroRefs = [useRef<HTMLHeadingElement>(null), useRef<HTMLHeadingElement>(null), useRef<HTMLParagraphElement>(null)];
	const searchBarRef = useRef<HTMLDivElement>(null);
	const searchIconRef = useRef<SVGSVGElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const floatingTween = useRef<gsap.core.Tween | null>(null);

	useEffect(() => {
		gsap.fromTo(
			heroRefs.map((ref) => ref.current),
			{y: 100, opacity: 0},
			{y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.6}
		);

		gsap.set(searchBarRef.current, {width: 34, height: 34});
		gsap.set(searchIconRef.current, {marginLeft: 0, opacity: 0});
		gsap.set(searchInputRef.current, {width: 0, opacity: 0, pointerEvents: 'none'});
		gsap.to(searchIconRef.current, {opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.2});
		floatingTween.current = gsap.to(searchBarRef.current, {
			y: -8,
			duration: 1.6,
			yoyo: true,
			repeat: -1,
			ease: 'sine.inOut',
		});
	}, []);

	const handleSearchEnter = () => {
		floatingTween.current?.pause();
		gsap.to(searchBarRef.current, {y: 0, duration: 0.2, ease: 'power2.out'});
		gsap.to(searchBarRef.current, {width: 500, duration: 0.4, ease: 'power2.out'});
		gsap.to(searchIconRef.current, {marginLeft: 2, duration: 0.3, ease: 'power2.out'});
		gsap.to(searchInputRef.current, {width: 420, opacity: 1, pointerEvents: 'auto', duration: 0.3, ease: 'power2.out', delay: 0.2});
	};
	const handleSearchLeave = () => {
		gsap.to(searchInputRef.current, {width: 0, opacity: 0, pointerEvents: 'none', duration: 0.2, ease: 'power2.in'});
		gsap.to(searchIconRef.current, {marginLeft: 0, duration: 0.2, ease: 'power2.in'});
		gsap.to(searchBarRef.current, {width: 34, height: 34, duration: 0.3, ease: 'power2.in', delay: 0.1});
		floatingTween.current?.resume();
	};

	return (
		<div className="flex flex-col min-h-screen bg-[#feefbc]">
			<section className="flex flex-col flex-1 items-center justify-center p-4 lg:p-8 min-h-screen">
				<div className="flex flex-col items-center gap-2">
					<h1 ref={heroRefs[0]} className="uppercase text-[96px] font-extrabold text-gray-900 tracking-[30px] leading-none">
						GELBE
					</h1>
					<div className="flex flex-row items-start justify-center">
						<div className="flex items-baseline">
							<h1 ref={heroRefs[1]} className="uppercase text-[96px] font-extrabold text-gray-900 tracking-[30px] leading-none">
								SEITEN
							</h1>
							<p ref={heroRefs[2]} className="text-[80px] font-extrabold text-yellow-400 leading-none ml-4 pb-4">
								.
							</p>
						</div>
					</div>
				</div>
				<div className="relative flex justify-center mt-[40px]">
					<div
						ref={searchBarRef}
						className="flex items-center bg-[#fbfaf4] rounded-full shadow overflow-hidden border border-gray-300"
						onMouseEnter={handleSearchEnter}
						onMouseLeave={handleSearchLeave}
						tabIndex={0}
						onFocus={handleSearchEnter}
						onBlur={handleSearchLeave}>
						<Search size={28} className="text-[#171616]  mx-3" ref={searchIconRef} />
						<input
							ref={searchInputRef}
							type="text"
							placeholder={'What are you searching for?'}
							className="bg-white outline-none border-0 text-lg opacity-0 w-0 pointer-events-none"
						/>
					</div>
				</div>
			</section>
			<HomeInfo />
		</div>
	);
};

export default Home;
