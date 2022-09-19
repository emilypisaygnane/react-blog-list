import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchBlogs();
  }, []);

  return blogs;
}