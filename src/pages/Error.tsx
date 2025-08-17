import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import ErrorImg from "../assets/images/element/error.svg"
import { Link } from "react-router-dom"

export const Error = () => {
  return (
    <div>
    <Header/>
        <main>
            <section>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-10 text-center mx-auto">
                  
                    <img src={ErrorImg} className="h-lg-500px mb-4" alt=""/>
                    
                    <h1 className="display-1 text-primary mb-0">404</h1>
                    
                    <h2>Oh no, something went wrong!</h2>
                    
                    <p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
                  
                    <Link to="/" className="btn btn-light mb-0">Take me to Homepage</Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
       <Footer />
    </div>
    )
} 
      