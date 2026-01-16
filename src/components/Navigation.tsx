import React, {useEffect, useState} from 'react';
import {PersonStanding} from 'lucide-react';
import {Button} from './ui/button';

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
					<h1 className="uppercase text-[12px] font-extrabold text-gray-900 ">Gelbe Seiten.</h1>
				</div>
				<div className="flex flex-row items-center justify-end w-full ">
					<div className="flex flex-row items-center justify-end gap-[4px] w-[200px]">
						<a href="https://www.gelbeseiten.de/gsservice/barrierefrei">
							<Button variant={'outline'} className="rounded-full border-[0.5px]">
								<PersonStanding size={12} />
							</Button>
						</a>
						<Button variant={'outline'} className="h-[28px] px-[12px] rounded-full border-[0.5px] hover:bg-[#f5c84a] flex items-center justify-center">
							<span className="text-[10px] font-extrabold leading-none">Firma Login</span>
						</Button>
					</div>
					<div className="relative group flex items-center">
						<button className="flex items-center justify-center rounded-full bg[#fff] border border-gray-300 h-8 w-8 transition-all duration-300 group-hover:w-48 group-hover:rounded-xl overflow-hidden shadow-sm"></button>
					</div>
				</div>
			</div>
		</nav>
	);
};
