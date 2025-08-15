import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "word" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: -50,
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-left-leaf", {
        y: -50,
        duration: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>address</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 457-3723</p>
          <p>email@example.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((el) => (
            <p key={el.day}>
              {el.day} : {el.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((el) => (
              <a href={el.url} rel={"noopenner relopener"} target="_blank">
                <img src={el.icon} alt={el.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
