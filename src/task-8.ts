
import axios from "axios";

interface Post { 
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.error("Помилка при завантаженні постів:", error);
    return []; 
  }
}

fetchPosts()
  .then((posts) => {
    if (posts.length > 0) {
      console.log(posts[0].title);
    } else {
      console.log("Пости не знайдено");
    }
  })
  .catch((err) => {
    console.error("Помилка при виконанні fetchPosts:", err);
  });
