import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RedirectIfLoggedIn from './components/auth/RedirectIfLoggedIn';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<ProtectedRoute path="/" exact component={Dashboard} />
					<ProtectedRoute path="/project/:id" component={ProjectDetails} />
					<ProtectedRoute path="/create" component={CreateProject} />
					<RedirectIfLoggedIn path="/signin" component={SignIn} />
					<RedirectIfLoggedIn path="/signup" component={SignUp} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
