import { Page, Section, Nav, Button, Footer } from "./components";

export default function App() {
  return (
    <Page>
      <Nav>
        <div>
          <strong>Dark Park Media</strong>
        </div>
        <div>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </Nav>

      <Section bg="#222">
        <h1>Cutting-Edge Post Production</h1>
        <p>
          High-end video editing for TV, film, and streaming. We turn your
          vision into stunning final cuts.
        </p>
        <Button href="#contact">Get in Touch</Button>
      </Section>

      <Section id="about" bg="#333">
        <h2>About Us</h2>
        <p>
          Dark Park Media is a boutique post-production company specializing in
          editing, color grading, and finishing for television and film. Our
          team brings years of experience delivering high-quality content for
          top-tier clients.
        </p>
      </Section>

      <Section id="services" bg="#222">
        <h2>Our Services</h2>
        <ul>
          <li>🎬 Video Editing</li>
          <li>🎨 Color Grading</li>
          <li>🔊 Sound Mixing</li>
          <li>📦 Final Delivery and Mastering</li>
        </ul>
      </Section>

      <Section id="contact" bg="#333">
        <h2>Contact</h2>
        <p>
          Ready to elevate your project? Contact us to discuss your next
          production.
        </p>
        <Button href="mailto:contact@darkpark.media">Email Us</Button>
      </Section>

      <Footer>
        © {new Date().getFullYear()} Dark Park Media. All rights reserved.
      </Footer>
    </Page>
  );
}
