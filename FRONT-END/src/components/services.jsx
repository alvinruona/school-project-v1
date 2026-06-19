import React from "react";
import './Services.css'

const service = [
  { title: 'Fast', desc: 'Powered by Vite for lightning-fast development.' },
  { title: 'Modern', desc: 'Built with React 18 and functional components.' },
  { title: 'Responsive', desc: 'Looks great on every device, out of the box.' },
]


function services() {
  return (
    <div className="services-area">
        <div className="services-area1"></div>
        <div className="services-area2">
          <article>
            <h2>The Key to Smooth Development of Efficient Projects</h2>
            <p>Eye dilated from caffeine and a constant death glare at the screen trying to figure out a bug.</p>
        
                <div className="services-list">
            {service.map((feat, i) => (
            <div className="services-list" key={i}>
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
            </div>
        ))}
      </div>  
      </article>
        </div>
    </div>
  )
}

export default services