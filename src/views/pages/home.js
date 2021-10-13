import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

export default function (props) {
	return (
		<div className="page page__home">
			
			<Card>
				<h2>Features:</h2>
				<ul>
					<li>Offline Caching (via `serviceWorker`)</li>
					<li>SASS & Autoprefixer</li>
					<li>Asset Versioning (aka "cache-busting")</li>
					<li>ES2015 (ES6) and ES2016 (ES7) support</li>
					<li>Hot Module Replacement (HMR) for all files</li>
					<li>Preact Developer Tools</li>
					
				</ul>
			</Card>

					</div>
	);
}
