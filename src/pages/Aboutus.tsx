import Footer from "../components/Footer"
import { Header } from "../components/Header"
import Element6 from "../assets/images/element/06.svg"
import Element2 from "../assets/images/element/07.svg"
import Element7 from "../assets/images/element/07.svg"
import Element8 from "../assets/images/element/08.svg"
import JoinUs from "../assets/images/element/join-us.svg"
import About1 from "../assets/images/new/DSC8412.jpg"
import About3 from "../assets/images/new/DSC9025.jpg"

export const AboutUs = () => {
  return (
      <div>
          <Header />
      <main>
        
        <section>
		<div className="container">
			<div className="row mb-5">
				<div className="col-xl-10 mx-auto text-center">
				
					<h1>Discover Comfort, Luxury, and Style With Us.</h1>
					<p className="lead">Wishden Hotels is a secure abode with luxurious apartments stay. It is efficiently managed by experienced personnel in hospitality and tourism services.</p>
					
					<div className="hstack gap-3 flex-wrap justify-content-center">
						
						<h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
							<img src={Element6} className="h-20px me-2" alt=""/>
							14K+ Global Customers
						</h6>

					
						<h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
							<img src={Element7} className="h-20px me-2" alt=""/>
							10K+ Happy Customers
						</h6>

						
						<h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
							<img src={Element8} className="h-20px me-2" alt=""/>
							1M+ Subscribers
						</h6>
					</div>
				</div>
      </div> 
            	
            
			<div className="row g-4 align-items-center">
				
				<div className="col-md-6">
					<img src={About1} className="rounded-3" alt=""/>
				</div>

				<div className="col-md-6">
					<div className="row g-4">
						
						
						<div className="col-12">
							<img src={About3} className="rounded-3" alt=""/>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</section>
	
	<section className="pt-0 pt-lg-5">
		<div className="container">
			<div className="row mb-4 mb-md-5">
			
            </div>
            <div className="pb-3 pb-md-5 pb-lg-7">
		<div className="container pb-3 ">
			<div className="row g-4 align-items-center">
				<div className="col-lg-7">
					
					<h1 className="mb-4 display-5">Our Commitment to <span className="text-primary">Excellence.</span></h1>
				
					<p className="mb-4">The hotel is situated in the heart of Gboko Town and an hour drive from Benue state capital Makurdi. It is located in the Government Reserved area of Gboko along access road and close to the Area Command of the Nigeria Police Force. It is built on multiple plots of land consisting of serene environment with lush green gardens making it a choice hotel conducive for both local guest, international guest and non-governmental organizations for conferences and workshops.</p>
					
					<a href="{% url 'pages:dynamic_pages' template_name='add-listing' %}" className="btn btn-primary-soft mb-4">Book Now <i
							className="fa-solid fa-arrow-right-long fa-fw"></i></a>
					
					<h6 className="fw-normal mb-1 pb-3">Categories of Apartments</h6>
          <div className="row g-3">
            {[
              "Standard singles",
              "Standard double II",
              "Standard double I",
              "Studios",
              "Deluxe",
              "Executive suites",
              "Luxury suites",
              "Executive hall",
              "Conference hall",
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-check-circle text-success me-2 mt-1"></i>
                  <span>{item}</span>
                </div>
              </div>
            ))}
            </div>

				</div>
				
				<div className="col-lg-5 text-center">
					<img src={JoinUs} alt=""/>
				</div>
			</div>
		</div>
	</div>
		
            
            <div className="row g-6 pb-3 pt-3 pb-md-5 pb-lg-7">
              <h1 className="text-center">Experience More With Us.</h1>
				
				<div className="col-sm-6 col-lg-4">
					<div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2"><i
							className="fa-solid fa-utensils fs-5"></i></div>
					<h5 className="mt-2">Dining Room and Bar</h5>
					<p className="mb-0">The restaurant is an ideal meeting place where both local and international guests alike enjoy meals in a cozy and relaxing atmosphere served in our lavishly furnished dining room.</p>
				</div>

				
				<div className="col-sm-6 col-lg-4">
					<div className="icon-lg bg-success bg-opacity-10 text-success rounded-2"><i
							className="fa-solid fa-lock fs-5"></i></div>
					<h5 className="mt-2">Secured doors with electronic keys</h5>
					<p className="mb-0">The hotel has electronic keys making it secured for guests at all times. </p>
				</div>

				
				
				<div className="col-sm-6 col-lg-4">
					<div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-2"><i
							className="fa-solid fa-bolt fs-5"></i></div>
					<h5 className="mt-2">Power Sources</h5>
					<p className="mb-0">The hotel has multiple options of power supply such as Solar, Generators and Public power supply (JED PLC). This enables the hotel with constant power supply for the comfort of our guests.</p>
				</div>

				
				<div className="col-sm-6 col-lg-4">
					<div className="icon-lg bg-secondary bg-opacity-10 text-secondary rounded-2"><i
							className="fa-solid fa-shield-halved fs-5"></i></div>
					<h5 className="mt-2">Trained Security Personnel</h5>
					<p className="mb-0">Wishden Hotel has presence of good number of security personnel safeguarding the gates and always on ground. 
					</p>
				</div>

				
				<div className="col-sm-6 col-lg-4">
					<div className="icon-lg bg-info bg-opacity-10 text-info rounded-2"><i className="fa-solid fa-door-open fs-5"></i>
					</div>
					<h5 className="mt-2">Conference Facilities</h5>
					<p className="mb-0">Located within the hotel also is our conference hall with ultra-modern video and audio-visual equipment with varying capacities ranging from 50-100 sitting capacity. We organize/host conferences, seminars, training.</p>
              </div>


              <div className="col-sm-6 col-lg-4">
					<div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2"><i className="fa-solid fa-building fs-5"></i>
					</div>
					<h5 className="mt-2">Accommodation</h5>
					<p className="mb-0">Wishden Hotel Gboko has 60 luxurious rooms and suites. All the apartments sizes are suitable for family holiday equipped with private sitting room, tastefully furnished for discerning mind who value quietude.</p>
				</div>
			</div>
			
		</div>
    </section>
        <section>
		<div className="container">
			<div className="bg-warning bg-opacity-50 rounded-3 p-4 p-sm-5">
				<div className="row align-items-center position-relative">
					<div className="col-lg-8">
						
						<div className="d-flex">
							<h3>Experience Elegance Like Never Before!</h3>
							<img src={Element2} className="h-40px ms-3" alt=""/>
						</div>
						<p className="mb-3 mb-lg-0">Elevate your travel experience with a stay that combines style, comfort, and exceptional service. Reserve your stay today and treat yourself to the luxury you deserve.</p>
					</div>
				
					<div className="col-lg-4 text-lg-end">
						<a href="#" className="btn btn-lg btn-dark mb-0">Book Today!</a>
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
      