import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
// import { useRouter } from "next/router";
import style from "../styles/pages/landing.module.css";

const Home: NextPage = () => {
  // const router = useRouter();
  return (
    <div>
      <Head>
        <title>MSys Technologies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.container}>
        <div className={style.buttonBox}>
          <h1>Collage Enquiry System Chatbot</h1>
          {/* <Button
            // basic
            className={style.button}
            inverted
            color="green"
            animated="vertical"
            size="big"
            onClick={() => router.push("/dashboard")}
          >
            <Button.Content hidden>Dashboard</Button.Content>
            <Button.Content visible>
              <Icon name="play" />
            </Button.Content>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { query: context.query },
  };
};
