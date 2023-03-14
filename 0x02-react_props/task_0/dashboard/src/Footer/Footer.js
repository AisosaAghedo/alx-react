import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";

function Footer() {
  return (
  <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </div>
  );
}

export default Footer;