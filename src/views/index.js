import { h } from 'preact'
import { Router } from 'preact-router';

import Home from './pages/home';
import Layout from './tags/layout';
import Error404 from './pages/errors/404';
import Map from './pages/map';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp:obj.url });

export default (
	<Layout>
		<Router onChange={ onChange }>
			<Home path="/" />
			<Map path="/map" />
			<Error404 default />
		</Router>
	</Layout>
);
