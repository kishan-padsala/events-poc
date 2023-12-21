import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

//! this layout will be common for all pages, so we can manage protected routes/pages using this
const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={`w-full items-center flex flex-col px-8 py-4 ${className}`}>
      {children}
      <ToastContainer />
    </section>
  );
};

export default Layout;
