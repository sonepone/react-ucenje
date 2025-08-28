import { Link } from "react-router-dom";

function Welcome()
{
    const jsx_code = <>
        <h2>Welcome to our shop!</h2>
        <p>Please explore <Link to='/products'>our products</Link> or share this site with others.</p>
      </>;

      return jsx_code;
}

export default Welcome;