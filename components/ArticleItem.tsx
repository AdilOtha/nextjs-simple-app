import React from 'react'
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

interface ArticleProps {
    article: {
        id: string,
        title: string,
        body: string,
        userId: string
    }
}

const ArticleItem: React.FC<ArticleProps> = ({article}) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
        <a className={articleStyles.card}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </a>
    </Link>
  )
}

// export ArticleProps interface
export type { ArticleProps }

export default ArticleItem