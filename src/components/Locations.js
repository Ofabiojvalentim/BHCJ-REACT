import React from 'react'

const Locations = () => {
  return (
    <div className="container-fluid">

        <div>
            <h1 className="text-center mb-4 pt-4 pb-4"> Locations </h1>
        </div>


        
            <div className="row justify-content-center mb-5">

                
                <div className="col-sm p-2 d-flex align-items-center justify-content-center zoom ">
                    <div className="services text-center">
                        <iframe title="washington" className="border p-2 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15308100534!2d-77.09697648920621!3d38.893859154934795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20D.C.%2C%20Distrito%20de%20Columbia%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1695864470167!5m2!1spt-BR!2sbr" width="208" height="208" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="info text-left m-2 ">    
                            <ul className="text-center ">
                                <li><h2>Washington DC</h2></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="col-sm p-2 d-flex align-items-center justify-content-center zoom ">
                    <div className="services text-center">
                        <iframe title="nevada" className="border p-2 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198445.35906425!2d-119.66266298542813!3d38.47652324223381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80990aa1f8deb471%3A0xcf47038aaafc95b3!2sNevada%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1695864791065!5m2!1spt-BR!2sbr" width="208" height="208" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="info text-left m-2">    
                            <ul>
                                <li><h2>Nevada</h2></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="col-sm p-2 d-flex align-items-center justify-content-center zoom ">
                    <div className="services text-center">
                        <iframe title="recife" className="border p-2 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126418.61210568812!2d-35.02025001515241!3d-8.041995361148054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1695864977979!5m2!1spt-BR!2sbr" width="208" height="208" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="info text-left m-2">    
                            <ul>
                                <li><h2>Recife - Brazil</h2></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div> 
        
    </div> 
  )
}

export default Locations
