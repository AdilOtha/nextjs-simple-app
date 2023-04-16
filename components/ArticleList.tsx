import React from 'react'
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'
import ArticleItem from './ArticleItem'

interface Props {
    articles: {
        id: string,
        title: string,
        body: string,
        userId: string
    }[]    
}

const ArticleList: React.FC<Props> = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map(article => (
            <ArticleItem article={article} key={article.id} />
        ))}
    </div>
  )
}

export default ArticleList