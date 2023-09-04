import Separator from '../separator';
import "./index.css";

const Footer = ({ children }) => <div className="footer">{children}</div>;

const WithFooter = ({ children, content, color }) => <div className="with-footer-container">
  <div className="with-footer-content">
    {children}
  </div>
  <Footer>
    {content && content}
    <Separator color={color} />
  </Footer>
</div>

export default WithFooter;