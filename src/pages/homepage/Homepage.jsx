import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <div className="home">
        <Posts />
      </div>
    </>
  );
}