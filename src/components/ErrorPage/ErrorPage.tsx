import { Link } from "react-router-dom";

export default function ErrorPage() {
 
  return (
    <div id="error-page">
       <h2>Nothing to see here!</h2>
      <p>
        <Link to="/profile">Go to the home page</Link>
      </p>
    </div>
  );
}