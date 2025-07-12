const Contact = () => (
  <section className="py-20 px-4 max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6">Contact</h2>
    <p className="mb-4">Feel free to reach out to me for opportunities or collaboration!</p>

    <div className="space-y-3 text-lg">
      <p>
        <strong>Email:</strong>{" "}
        <a className="text-teal-600 hover:underline" href="mailto:divyaparvani10@gmail.com">
          divyaparvani10@gmail.com
        </a>
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        <a className="text-teal-600 hover:underline" href="tel:+918200794335">
          +91-8200794335
        </a>
      </p>

      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          className="text-teal-600 hover:underline"
          href="https://www.linkedin.com/in/divyaparvani-602224242"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/divyaparvani10-602224242
        </a>
      </p>

      <p>
        <strong>GitHub:</strong>{" "}
        <a
          className="text-teal-600 hover:underline"
          href="https://github.com/divyaparvani10"
          target="_blank"
          rel="noreferrer"
        >
          github.com/divyaparvani10
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
