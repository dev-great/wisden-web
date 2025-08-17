import Footer from "../components/Footer"
import { Header } from "../components/Header"

export const FAQ = () => {
  return (
    
    <div>
        <Header />
        <main>
	<section className="pt-4 pt-lg-5">
		<div className="container">
			<div className="row">
				<div className="col-lg-10 mx-auto text-center">
								
					
					<h1>Frequently Asked Questions</h1>
				
					<p>have questions? We're here to help you</p>
					
					<form className="col-lg-8 position-relative mx-auto">
						<input className="form-control form-control-lg pe-5" type="search" placeholder="Type search words"
							aria-label="Search"/>
						<button
							className="text-primary-hover text-reset border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y pe-3 py-0"
							type="submit"><i className="fas fa-search fs-6"></i></button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<section className="pt-0">
		<div className="container">
			<div className="row">
				<div className="col-xl-10 mx-auto">
					<div className="vstack gap-4">
						
						<div className="card border bg-transparent p-0">
							
							<div className="card-header bg-transparent border-bottom p-4">
								<h5 className="text-primary">Faqs</h5>
							</div>

							
							<div className="card-body p-4 pt-0">
								<div className="mt-4">
                                <h6 className="fw-normal">Where is Wishden Hotel located?</h6>
                                <p className="mb-0">Wishden Hotel is situated in the heart of Gboko Town, just an hour’s drive from Makurdi, the Benue State capital. It is located in the Government Reserved Area of Gboko, close to the Nigeria Police Area Command.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">What makes Wishden Hotel a secure choice?</h6>
                                <p className="mb-0">Our hotel is equipped with secured electronic doors and trained security personnel who are always on ground, ensuring the safety of all guests at all times.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">Does Wishden Hotel provide constant electricity?</h6>
                                <p className="mb-0">Yes. We have multiple sources of power supply including solar energy, generators, and public power supply (JED PLC) to guarantee uninterrupted electricity for our guests.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">What dining options are available?</h6>
                                <p className="mb-0">Guests can enjoy meals in our lavishly furnished dining room, bar, or terrace/lounge. We offer full English breakfast, lunch, dinner, barbeque, charcoal-grilled meats, salads, fruits, and desserts served by professional staff.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">Does Wishden Hotel offer conference or event facilities?</h6>
                                <p className="mb-0">Yes. We have conference halls with ultra-modern video and audio equipment, suitable for seminars, trainings, and events, with capacities ranging from 50 to 100 seats.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">What types of rooms are available?</h6>
                                <p className="mb-0">We offer a variety of accommodations including Standard Singles, Standard Doubles, Studios, Deluxe, Executive Suites, and Luxury Suites — all equipped with modern amenities such as satellite TV, air conditioning, and spacious living areas.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">Do you offer discounts for organizations?</h6>
                                <p className="mb-0">Yes. Corporate organizations enjoy a 5% discount on accommodation and hall rentals. We also allow up to two weeks for bill settlement after workshops or seminars.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">What are the hotel’s check-in and check-out times?</h6>
                                <p className="mb-0">Our official check-out time is 12:00 noon daily. Guests are advised to check out before this time to avoid additional charges.</p>
                                </div>

                                <div className="mt-4">
                                <h6 className="fw-normal">What extra services does Wishden Hotel provide?</h6>
                                <p className="mb-0">For added comfort, we offer guest laundry, safety deposit boxes, projectors for presentations, and a well-equipped gymnasium for fitness.</p>
                                </div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>
    </main>

        <Footer/>
    </div>
    )
} 
      