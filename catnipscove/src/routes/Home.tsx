
import React, { useState } from "react";

export function Home() {
  
  
  
  
  return (
    <>
    <div className="main-content">
  <section className="welcome">
    <h1>Welcome to the Catnips Cove</h1>
    <div className="welcome-content">
      <img src="src\Images\shelter1.png" alt="Cats playing in a cozy room"/>
      <p>
        At Catnips Cove, we’re committed to rescuing, caring for, and finding loving homes for cats in need. Our mission is to give every cat a second chance at a happy life.
      </p>
    </div>
  </section>
  
  <section className="why-adopt">
    <h2>Why Adopt?</h2>
    <div className="why-adopt-content">
      <img src="src\Images\shelter3.png" alt="A happy cat in a new home"/>
      <p>
        Adopting a cat from us not only saves a life, but it also gives you a loyal, loving companion. All our cats are spayed/neutered, vaccinated, and ready to meet their new family!
      </p>
    </div>
  </section>

  <section className="help">
    <h2>How You Can Help</h2>
    <ul>
      <li>Adopt: Give a cat a forever home.</li>
      <li>Foster: Provide temporary care for cats in need.</li>
      <li>Donate: Support us in providing food, medical care, and shelter.</li>
      <li>Volunteer: Help care for our cats and assist at events.</li>
    </ul>
  </section>
</div>
</>
)

}
