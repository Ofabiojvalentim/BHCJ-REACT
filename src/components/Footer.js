import React from 'react'

const Footer = () => {
  return (

      <div className="footer-snippet text-center text-lg-start">
	      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="">
            <ul>
              <li> 1st Avenue - Washington DC - USA </li>
              <li> Phone: 81-9-9999-0000</li>
              <li> E-mail: eu@fabiojvalentim.com.br </li>
            </ul>
          </div>

          <div className="d-none d-md-block">
            <p> <i>"The limit exists when you start thinking about it"</i></p>
          </div>
	      </section>

	
        <div className="text-center p-4" style={{"backgroundColor": 'rgba(0, 0, 0, 0.025)'}}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://www.linkein.com/in/fabiojvalentim/"> Ofabiojvalentim</a>
        </div>

      </div> /* endof div className="footer-snippet text-center text-lg-start" */
    
  )
}

export default Footer
