import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
            
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
             Technology
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          How Technology is Changing?
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Traveling is an enriching experience that opens up new horizons, exposes us to different
      cultures, and creates memories that last a lifetime. However, traveling can also be
      stressful and overwhelming, especially if you don't plan and prepare adequately. In this
blog article, we'll explore tips and tricks for a memorable journey and how to make the
most of your travels.
One of the most rewarding aspects of traveling is immersing yourself in the local culture
and customs. This includes trying local cuisine, attending cultural events and festivals,
and interacting with locals. Learning a few phrases in the local language can also go a
long way in making connections and showing respect.

      </p>
    </div>
  );
}