import Head from "next/head";
import styles from "@/styles/Layout.module.scss";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

const Layout = ({ title, keyword, description, children }) => {
  const routes = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "dj event",
  description: "test project",
  keyword: "textProject,djEvent",
};
