import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { Header } from "../components/Header"

export const PrivacyPolicy = () => {
  return (
    <div>
                <div className="back-top"></div>
          <Header/>
         
<main>
	<section className="pt-4 pt-lg-5">
		<div className="container">
			<div className="row">
				<div className="col-12 text-center mb-4">
					<h6>AGREEMENT</h6>
					<h1 className="fs-2 mb-0">Privacy Policy</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-10 mx-auto">
					<div className="vstack gap-3">

							<div className="card-body px-0 pt-4">
								

									<div className="tab-pane fade show active" id="tab-1">

                                    <ul className="list-unstyled vstack gap-3">

                                     <li>
                                        <strong>Commitment to Privacy:</strong> Wishden Hotel Gboko is committed to
                                        protecting the privacy and security of our guests, visitors, and website
                                        users. This policy explains how we collect, use, disclose, and safeguard
                                        your information when you interact with us — whether in person, via
                                        telephone, email, or online.
                                    </li>

                                    <li>
                                        <strong>Information We Collect:</strong> We may collect personal details
                                        (name, address, email, phone, payment information), booking and stay
                                        information (room preferences, special requests), business/corporate
                                        details for group bookings, and technical data such as IP address and
                                        browser type if you book online.
                                    </li>

                                    <li>
                                        <strong>How We Use Your Information:</strong> Your data is used for
                                        processing bookings and payments, providing personalized hospitality
                                        services, sending booking confirmations and invoices, managing event
                                        bookings, improving services, and complying with laws.
                                    </li>

                                    <li>
                                        <strong>Data Sharing & Disclosure:</strong> We never sell guest data.
                                        Information may be shared only with authorized staff, secure payment
                                        processors, or as required by law, court order, or government request.
                                    </li>

                                    <li>
                                        <strong>Data Security:</strong> We maintain physical, technical, and
                                        administrative safeguards, including secure electronic room keys,
                                        restricted access to guest data, and multiple power sources for
                                        uninterrupted services.
                                    </li>

                                    <li>
                                        <strong>Data Retention:</strong> Guest records are retained only as long
                                        as necessary for providing services, meeting accounting obligations, and
                                        resolving disputes.
                                    </li>

                                    <li>
                                        <strong>Your Rights:</strong> Guests may access, correct, or request
                                        deletion of their personal information. You may also withdraw consent for
                                        non-essential usage or request a copy of the data we hold about you.
                                    </li>

                                    <li>
                                        <strong>Cookies & Online Bookings:</strong> If our website uses cookies,
                                        they are strictly for improving booking efficiency and user experience.
                                        Cookies may be disabled in your browser at any time.
                                    </li>

                                    <li>
                                        <strong>Contact:</strong> For privacy-related inquiries, please contact us
                                        at <strong>wishdenhotels@gmail.com </strong> or  <strong>07019151382 / 09132286117.</strong>
                                    </li>

                                    </ul>

										<div className="hstack gap-3 flex-wrap">
											<Link to="/" className="btn btn-primary mb-0">I agree with the terms</Link>
										</div>
									</div>
									
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     </main>
             <Footer />
    </div>
    )
} 
      