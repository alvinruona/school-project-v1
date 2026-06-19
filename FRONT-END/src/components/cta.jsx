import React from "react";
import './Cta.css'

function cta() {
  return (
    <div className="cta-area">
        <article>
          <p>We in way you wont expect</p>
          <h2>Were on a Mission Here To Break <br />the 4th wall</h2>
          <p>Lets get over the formalities and start working together on world changing projects today.</p>
        </article>
        <div className="cta-callout">
          <p><span>25%</span>Reliability</p>
            <p><span>24/7</span>Working Hours</p>
              <p><span>10k+</span>Satisfied Customers</p>
        </div>
        <div>
          <button>Get Started Now</button>
          <button>Learn More</button>
        </div>
    </div>
  )
}

export default cta