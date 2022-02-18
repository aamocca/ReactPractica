import TopBar from "./TopBar";
import Footer from "./Footer";
import ContentRowTop from "./ContentRowTop";

const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        {/* Beginning Top bar */}
        <TopBar />
        <ContentRowTop />
      </div>
      <Footer />
    </div>
  );
};

export default ContentWrapper;
