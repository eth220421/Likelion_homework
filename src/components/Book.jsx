import "./Book.css";

const Book = ({ array }) => {
  return (
    <div id="book">
      <span>{array[0]}</span>
      <div style={{ backgroundColor: array[1] }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
        >
            <path
              d={array[2]}
              fill={array[3]}
            />
          <defs>
            <clipPath id="clip0_661_236">
              <rect
                width="34.5059"
                height="33.7391"
                fill="white"
                transform="translate(0.735962 0.735016)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Book;
