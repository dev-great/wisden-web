import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { Header } from "../components/Header"

export const TermsOfService = () => {
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
					<h1 className="fs-2 mb-0">Terms Of Service</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-10 mx-auto">
					<div className="vstack gap-3">

							<div className="card-body px-0 pt-4">
								

									<div className="tab-pane fade show active" id="tab-1">

                                    <ul className="list-unstyled vstack gap-3">

                                    <li>
                                        <strong>No Damage to Facilities:</strong> Guests are expected to treat all hotel
                                        property with care. Any damage, intentional or accidental, to furniture,
                                        appliances, or fixtures within the hotel premises will attract repair or
                                        replacement charges as determined by management.
                                    </li>

                                    <li>
                                        <strong>Payment Methods:</strong> The hotel accepts multiple modes of
                                        payment for guests’ convenience, including cash, online payments, and
                                        direct bank transfers. Please ensure payments are confirmed before check-in.
                                    </li>

                                    <li>
                                        <strong>Booking Cancellations:</strong> Cancellations are allowed; however,
                                        they attract a 10% service charge on the booking amount. Refunds (where
                                        applicable) will be processed within a reasonable period of time.
                                    </li>

                                    <li>
                                        <strong>Guest Limit:</strong> Each apartment is designed to accommodate a
                                        maximum of two persons only. Additional guests beyond this limit are not
                                        permitted unless prior written approval is granted by management.
                                    </li>

                                    <li>
                                        <strong>Check-out Policy:</strong> Standard check-out time is 12:00 noon
                                        daily. Guests who wish to extend their stay must contact the reception desk
                                        in advance to confirm availability and any applicable extra charges.
                                    </li>

                                    <li>
                                        <strong>Respect for Others:</strong> Guests must maintain respect for other
                                        occupants and avoid conduct that could disturb or inconvenience others,
                                        including excessive noise, inappropriate behavior, or damage to shared
                                        property.
                                    </li>

                                    <li>
                                        <strong>Safety Compliance:</strong> For the well-being of all guests, strict
                                        adherence to the hotel’s safety rules and fire regulations is required at
                                        all times. Tampering with safety equipment is prohibited.
                                    </li>

                                    <li>
                                        <strong>Room Allocation Rights:</strong> The hotel reserves the right to
                                        allocate rooms to guests based on availability and operational
                                        requirements. While efforts will be made to honor special requests, they
                                        cannot be guaranteed.
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
      