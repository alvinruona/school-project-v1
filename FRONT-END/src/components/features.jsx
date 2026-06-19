import React from "react";
import './Features.css'

const features = [
  { title: 'Fast', desc: 'Powered by Vite for lightning-fast development.' },
  { title: 'Modern', desc: 'Built with React 18 and functional components.' },
  { title: 'Responsive', desc: 'Looks great on every device, out of the box.' },
  { title: 'Jolly', desc: 'When Rock lee and Guy lee take celebrate the summer of youth' },
    { title: 'Ero', desc: 'Jiraya getting ideas for his book icha icha tactics' },
        { title: 'Seductive', desc: 'How orochimaru blatantly seduced sasuke with power' },
]

function Features() {
  return (
    <section className="features">
      <h2>The Kind of Amazing Features I Want to Add</h2>
      <div className="features-grid">
        {features.map((feat, i) => (
          <div className="feature-card" key={i}>
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features