import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const FAQ = () => {
  return <div>
    <Navbar />
    <Accordion title="Section 1">
        <p>This is the content for Section 1.</p>
      </Accordion>

      <Accordion title="Section 2">
        <p>This is the content for Section 2.</p>
      </Accordion>

      <Accordion title="Section 3">
        <p>This is the content for Section 3.</p>
      </Accordion>
      <Footer />
  </div>;
};

export default FAQ;
