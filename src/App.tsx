import {BrowserRouter, Route, Routes} from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
