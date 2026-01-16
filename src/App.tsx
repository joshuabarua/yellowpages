import { BrowserRouter, Route, Routes } from 'react-router';
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import Firmenprofil from './pages/Firmenprofil';
import Statistiken from './pages/Statistiken';
import Bewertungen from './pages/Bewertungen';
import Einstellungen from './pages/Einstellungen';
import { UserSync } from './components/UserSync';
import './App.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<>
		<SignedIn>{children}</SignedIn>
		<SignedOut><RedirectToSignIn /></SignedOut>
	</>
);

const App = () => {
	return (
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<UserSync />
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login/*" element={<SignIn routing="path" path="/login" signUpUrl="/registrieren" forceRedirectUrl="/dashboard" />} />
						<Route path="registrieren/*" element={<SignUp routing="path" path="/registrieren" signInUrl="/login" forceRedirectUrl="/dashboard" />} />
						<Route path="suche" element={<Search />} />
						<Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
						<Route path="dashboard/firmenprofil" element={<ProtectedRoute><Firmenprofil /></ProtectedRoute>} />
						<Route path="dashboard/statistiken" element={<ProtectedRoute><Statistiken /></ProtectedRoute>} />
						<Route path="dashboard/bewertungen" element={<ProtectedRoute><Bewertungen /></ProtectedRoute>} />
						<Route path="dashboard/einstellungen" element={<ProtectedRoute><Einstellungen /></ProtectedRoute>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ClerkProvider>
	);
};

export default App;
