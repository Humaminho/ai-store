import Newsletter from '../Newsletter';

export default function About() {
	return (
		<section className="about page">
			<div className="container">
				<div className="section story-section">
					<h2 className="section-title">Our Story</h2>
					<p className="section-description">
						Founded in 2022, our clothing store started as a passion
						project with a vision to provide fashionable and
						comfortable clothing options for everyone. We began by
						handpicking unique and stylish pieces that resonated
						with our values and fashion sensibilities.
					</p>
					<p className="section-description">
						As our store grew, so did our commitment to offering a
						curated collection that represents diverse styles and
						caters to various fashion preferences. We believe that
						clothing should not only make you look good but also
						make you feel confident and empowered.
					</p>
					<p className="section-description">
						We value the satisfaction of our customers above all
						else. Our dedicated team ensures that every item in our
						collection meets high standards of quality and
						craftsmanship. With a focus on exceptional customer
						service, we strive to provide a seamless and enjoyable
						shopping experience for everyone who visits our store.
					</p>
				</div>

				<div className="section services-section">
					<h2 className="section-title">Our Services</h2>
					<div className="service-segments">
						<div className="service-segment">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								fill="currentColor"
								className="bi bi-clipboard-heart"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Z"
								/>
								<path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
								<path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982Z" />
							</svg>
							<h3 className="segment-title">
								Curated Collection
							</h3>
							<p className="segment-description">
								We take pride in our carefully curated
								collection of clothing and accessories. Our team
								of fashion experts stays up to date with the
								latest trends and handpicks each item with care.
							</p>
						</div>
						<div className="service-segment">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								fill="currentColor"
								className="bi bi-gem"
								viewBox="0 0 16 16"
							>
								<path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
							</svg>
							<h3 className="segment-title">
								Personalized Styling
							</h3>
							<p className="segment-description">
								We understand that fashion is personal, and
								everyone has their unique style. That's why we
								offer personalized styling services to help you
								find the perfect outfit for any occasion.
							</p>
						</div>
						<div className="service-segment">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								width="50"
								height="50"
							>
								<title>face-agent</title>
								<path d="M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z" />
							</svg>
							<h3 className="segment-title">
								Exceptional Customer Care
							</h3>
							<p className="segment-description">
								Your satisfaction is our top priority. We strive
								to provide exceptional customer care throughout
								your shopping experience. Our friendly and
								responsive support team is always here to help.
							</p>
						</div>
						<div className="service-segment">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								fill="currentColor"
								className="bi bi-clipboard-heart"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Z"
								/>
								<path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
								<path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982Z" />
							</svg>
							<h3 className="segment-title">
								Fast and Reliable Shipping
							</h3>
							<p className="segment-description">
								We offer fast and reliable shipping services to
								ensure your new clothing items arrive promptly.
								Our dedicated team processes orders quickly,
								partnering with trusted carriers for safe and
								timely delivery.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Newsletter />
		</section>
	);
}
