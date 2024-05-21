import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post img="https://images.pexels.com/photos/339379/pexels-photo-339379.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/34521/space-shuttle-lift-off-liftoff-nasa.jpg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
  );
}