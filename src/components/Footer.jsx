import "./Footer.css";

const Footer = ({ array }) => {
  return (
    <div id="footer">
      <span>{array[0]}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="16"
        viewBox="0 0 2 16"
        fill="none"
      >
        <path d="M1.36023 16V0.378181" stroke="#929292" />
      </svg>
      <span>{array[1]}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="16"
        viewBox="0 0 2 16"
        fill="none"
      >
        <path d="M1.36023 16V0.378181" stroke="#929292" />
      </svg>
      <span>{array[2]}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="16"
        viewBox="0 0 2 16"
        fill="none"
      >
        <path d="M1.36023 16V0.378181" stroke="#929292" />
      </svg>
      <span>{array[3]}</span>
    </div>
  );
};

export default Footer;
