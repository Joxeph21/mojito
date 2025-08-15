import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";

export default function Cocktails() {
  useGSAP(() => {
    const parralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parralaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails</h2>

          <ul>
            {cocktailLists.map((el) => (
              <li key={el.name}>
                <div className="md:me-28">
                  <h3>{el.name}</h3>
                  <p>
                    {el.country} | {el.detail}
                  </p>
                </div>
                <span>- {el.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved cocktails</h2>

          <ul>
            {mockTailLists.map((el) => (
              <li key={el.name}>
                <div className="md:me-28">
                  <h3>{el.name}</h3>
                  <p>
                    {el.country} | {el.detail}
                  </p>
                </div>
                <span>- {el.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
