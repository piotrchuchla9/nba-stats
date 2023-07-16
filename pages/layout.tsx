import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import { RootState } from "@/utils/redux/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className="flex" data-theme={theme}>
      <div className="w-96 z-10">
        <Navbar />
      </div>
      <div className="flex-1 h-screen p-12 overflow-y-auto relative">
        <PageTransition>{children}</PageTransition>
      </div>
    </div>
  );
};

export default Layout;
