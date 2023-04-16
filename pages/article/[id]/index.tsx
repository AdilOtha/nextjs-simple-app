import React from "react";
import { ArticleProps } from "../../../components/ArticleItem";
import Link from "next/link";
import Meta from "../../../components/Meta";

const article: React.FC<ArticleProps> = ({ article }) => {
  // const router: NextRouter = useRouter()
  // const { id } = router.query

  // could use useEffect to fetch data from API but we'll be using getStaticPaths and getStaticProps

  return (
    <>
      <Meta title={article.title} description={article.body} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export default article;
