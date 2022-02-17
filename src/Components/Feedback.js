import "../index.css";

const Feedback = () => {
  return (
    <div className="feedback">
      <p>
        Problems using Studio Ghiblist? Recommendations for future versions? We
        would love to hear from you! Send us feedback using the form below.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScHfYWePjJY-zUpd1RMW7fhQMLS4KnthE6Bu6jYm3-w_p0DYQ/viewform?embedded=true"
        width="640"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Feedback;
