import React from 'react';
import './Post.css';
import styles from './Post.module.scss';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from '../../json/posts.json';
import Article from '../../components/Article';
import PostCard from '../../components/PostCard';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from '../NotFound';
import DefaultPage from '../DefaultPage';

export default function Post() {
    const parameters = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parameters.id);
    })

    if(!post) {
        return <NotFound />
    }

    const postsForYou = posts.filter((post) => 
        post.id !== Number(parameters.id) 
    ).sort((a, b) => 
        b.id - a.id
    ).slice(0, 4);

    return (
        <Routes >
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <Article 
                        coverPhoto={`/assets/posts/${post.id}/cover.png`}
                        title={post.title} >   
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.text}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.othersPosts}>Other posts you may like!</h2>

                        <ul className={styles.recommendedPosts}>
                            {
                                postsForYou.map((post) => (
                                    <li key={post.id} >
                                        <PostCard post={post} />
                                    </li>
                                ))
                            }
                        </ul>

                    </Article>
                    }
                />
            </Route>
        </Routes>        
    )
}
