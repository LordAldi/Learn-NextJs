import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm Aldi Anugra. I'm a software enginer. You can contact me on{" "}
          <a href="https://www.instagram.com/aldi_anu/">Instagram</a>
        </p>
      </section>
    </Layout>
  );
}
