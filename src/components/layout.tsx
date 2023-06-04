import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Seo from "./seo";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Seo />
      <Navbar />
      {children}
    </>
  );
}
