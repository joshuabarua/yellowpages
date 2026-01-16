import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { PersonStanding } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation: React.FC = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 10);
		window.addEventListener('scroll', onScroll);
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className={`bg-[#f8f3e6] w-screen fixed border-b-[0.5px] top-0 left-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
			<div className="px-[16px] py-[8px] flex flex-row items-center justify-between">
				<div className="flex items-center flex-row w-[200px]">
					<Link to="/" className="font-renade uppercase text-[12px] font-extrabold text-gray-900">Gelbe Seiten<span className="text-[#facc15]">.</span></Link>
				</div>
				<div className="flex flex-row items-center justify-end gap-[10px]">
					<a href="https://www.gelbeseiten.de/gsservice/barrierefrei" aria-label="Barrierefreiheit" className="hover-wiggle flex items-center justify-center h-[28px] w-[28px] rounded-full border border-gray-300 bg-white">
						<PersonStanding size={14} />
					</a>
					<SignedOut>
						<Link to="/login">
							<Button variant={'outline'} className="h-[28px] px-[12px] rounded-full border-[0.5px] hover:bg-[#f5c84a] flex items-center justify-center">
								<span className="font-excon text-[10px] font-extrabold leading-none">Firma Login</span>
							</Button>
						</Link>
					</SignedOut>
					<SignedIn>
						<div className="flex items-center justify-center h-[28px] w-[28px]">
							<UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: 'h-[28px] w-[28px]' } }} />
						</div>
					</SignedIn>
				</div>
			</div>
		</nav>
	);
};
