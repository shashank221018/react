import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer position-fixed">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Link className="footer__link" to="/tnc">Terms of use</Link>
                </div>
                <div className="col-md-4">
                    <Link className="footer__link" to="/">Help</Link>
                </div>
                <div className="col-md-4">
                    <Link className="footer__link" to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer