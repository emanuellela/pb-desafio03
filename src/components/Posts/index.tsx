import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Defina o tipo para os dados dos posts
interface Post {
    id: number;
    title: string;
    nome: string;
  }
  
  const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Especifica o tipo como Post[]

  useEffect(() => {
    // Função assíncrona para buscar os posts da API
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts'); // Especifica o tipo como Post[]
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map(post => (
          <li style={{
            backgroundColor: "#FFF3DA",
            margin: "6px"
          }} key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;