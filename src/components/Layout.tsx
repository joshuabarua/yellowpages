import {Outlet} from 'react-router';
import {Navigation} from './Navigation';
import Footer from './Footer';

const Layout = () => {
	return (
		<div className="bg-colors-brand">
			<Navigation />
			<main className="p-4 lg:p-8">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
