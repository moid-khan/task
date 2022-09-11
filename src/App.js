import { Container } from "@mui/material";
import Post from "./components/Post";
import "./App.css";

// Data Files
import Users from "./data/user.json";
import Posts from "./data/post.json";

const App = () => {
  const posts = Posts.map((post) => {
    const user = Users.find((user) => user.id === post.user_id);
    return {
      ...post,
      user,
    };
  });

  return (
    <Container maxWidth="md">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Container>
  );
};

export default App;
