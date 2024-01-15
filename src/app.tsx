import styles from "./app.module.css";

export function App() {
	return (
		<div className={styles.container}>
			<aside className={styles.sidebar}>
				<a href="/">
					Exome
				</a>

				<nav>
					<section>
						<h2 class="nav-section-title">Start here</h2>
						<ul class="nav-section-links-list">
							<li class="nav-section-links-list-item">
								<a href="/getting-started" class="nav-section-link">
									Getting-started
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/database" class="nav-section-link">
									Database
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/upgrade-v3" class="nav-section-link">
									Upgrade to v3
								</a>
							</li>
						</ul>
					</section>

					<section>
						<h2 class="nav-section-title">Tutorials</h2>
						<ul class="nav-section-links-list">
							<li class="nav-section-links-list-item">
								<a href="/tutorials/github-oauth" class="nav-section-link">
									GitHub OAuth
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a
									href="/tutorials/username-and-password"
									class="nav-section-link"
								>
									Username and password
								</a>
							</li>
						</ul>
					</section>

					<section>
						<h2 class="nav-section-title">Basics</h2>
						<ul class="nav-section-links-list">
							<li class="nav-section-links-list-item">
								<a href="/basics/sessions" class="nav-section-link">
									Sessions
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/basics/users" class="nav-section-link">
									Users
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/basics/configuration" class="nav-section-link">
									Configuration
								</a>
							</li>
						</ul>
					</section>

					<section>
						<h2 class="nav-section-title">Guides</h2>
						<ul class="nav-section-links-list">
							<li class="nav-section-links-list-item">
								<a
									href="/guides/validate-session-cookies"
									class="nav-section-link"
								>
									Validate session cookies
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a
									href="/guides/validate-bearer-tokens"
									class="nav-section-link"
								>
									Validate bearer tokens
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/guides/oauth" class="nav-section-link">
									OAuth
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/guides/email-and-password" class="nav-section-link">
									Email and password
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/guides/troubleshooting" class="nav-section-link">
									Troubleshooting
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/guides/passkeys" class="nav-section-link">
									Passkeys
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a href="/guides/improving-sessions" class="nav-section-link">
									Improving sessions
								</a>
							</li>
						</ul>
					</section>

					<section>
						<h2 class="nav-section-title">API reference</h2>
						<ul class="nav-section-links-list">
							<li class="nav-section-links-list-item">
								<a href="/reference/main" class="nav-section-link">
									lucia
								</a>
							</li>
						</ul>
					</section>

					<section>
						<h2 class="nav-section-title">Community</h2>
						<ul class="nav-section-links-list">
							<li class="nav-section-links-list-item">
								<a
									href="https://discord.com/invite/PwrK3kpVR3"
									class="nav-section-link"
								>
									Discord
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a
									href="https://github.com/lucia-auth/lucia"
									class="nav-section-link"
								>
									GitHub
								</a>
							</li>

							<li class="nav-section-links-list-item">
								<a
									href="https://twitter.com/lucia-auth"
									class="nav-section-link"
								>
									Twitter
								</a>
							</li>
						</ul>
					</section>
				</nav>
			</aside>

			<main className={styles.content}>
				<h1>Hello world</h1>

				<p>asd</p>
			</main>
		</div>
	);
}
