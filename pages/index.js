import {server} from '../config'
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({articles}) {
  console.log(articles);
  return (
    <>
      <Head>
        <title>WedDev News</title>
        <meta name='keywords' content="web-dev" />
      </Head>
      <div>
        <h1>Welcome to Next</h1>
        <ArticleList articles={articles} />
      </div>
    </>
  );
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}