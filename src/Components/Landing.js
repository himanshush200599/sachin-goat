import React from "react";
function Landing() {
  return (
    <main id="main">
      <h1 id="title">Sachin Tendulkar -The Greatest of All Time</h1>
      <p>The man who known as GOD OF CRICKET</p>
      <figure id="img-div">
        <img
          id="image"
          src="/assests/sachin.jpg"
          alt="One of the sachin best Innings"
        />
        <figcaption id="img-caption">
          Sachin Tendulkar after scoring one of its centuary from 100 such
          centuary.
        </figcaption>
      </figure>
      <section id="tribute-info">
        <h3 id="headline">Here's a time line of Sachin Tendulkar life:</h3>
        <ul>
          <li>
            <strong>1973</strong> - Born in Bombay , Maharashtra
          </li>
          <li>
            <strong>1989</strong> - Test debut on 15 November 1989 vs{" "}
            <strong>Pakistan</strong>
          </li>
          <li>
            <strong>2013</strong> - Last Test played againt{" "}
            <strong>West Indies</strong> on 14 November 2013
          </li>
          <li>
            <strong>1989</strong> - ODI debut on 18 December 1989 vs{" "}
            <strong>Pakistan</strong>
          </li>
          <li>
            <strong>2012</strong> - Last ODI played against{" "}
            <strong>Pakistan</strong> on 18 march 2012
          </li>
          <li>
            <strong>2006</strong> - Only T20 against{" "}
            <strong>South Africa</strong> on 1 December 2006
          </li>
          <li>
            <strong>2008-2013</strong> - Sachin played for Mumbai indians in
            IPL.
          </li>
          <li>
            <strong>1994</strong> - Tendulkar received the Arjuna Award in 1994
            for his outstanding sporting achievement
          </li>
          <li>
            <strong>1997</strong> - He received The Rajiv Gandhi Khel Ratna
            award in 1997, India's highest sporting honour.
          </li>
          <li>
            <strong>2014</strong> - Sachin received BHARAT RATNA in Feb 2014
            highest award in india.
          </li>
        </ul>

        <h3>
          Read more about him
          <a
            id="tribute-link"
            href="https://en.wikipedia.org/wiki/Sachin_Tendulkar"
          >
            {" "}
            Here
          </a>
          .
        </h3>
      </section>
    </main>
  );
}

export default Landing;
