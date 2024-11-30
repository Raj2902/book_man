import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page-main-container">
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-message">Page Not Found</div>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
export default Error;
