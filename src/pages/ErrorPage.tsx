import { Button } from "react-bootstrap";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div id="coating">
      <div className="content">
        <svg viewBox="0 0 960 300" id="svgError">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%">
              404
            </text>
          </symbol>

          <g className="g-ants">
            <use xlinkHref="#s-text" className="text"></use>
            <use xlinkHref="#s-text" className="text"></use>
            <use xlinkHref="#s-text" className="text"></use>
            <use xlinkHref="#s-text" className="text"></use>
            <use xlinkHref="#s-text" className="text"></use>
          </g>
        </svg>

        <h2 style={{ marginBottom: "20px" }}>Page Not Found</h2>
        <Button variant="secondary" size="lg" active href="/">
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
