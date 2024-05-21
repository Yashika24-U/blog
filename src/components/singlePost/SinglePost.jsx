import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
        The Impact Of Technology
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Yashika
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Traveling is an enriching experience that opens up new horizons, exposes us to different
cultures, and creates memories that last a lifetime. However, traveling can also be
stressful and overwhelming, especially if you don't plan and prepare adequately. In this
blog article, we'll explore tips and tricks for a memorable journey and how to make the
most of your travels.
One of the most rewarding aspects of traveling is immersing yourself in the local culture
and customs. This includes trying local cuisine, attending cultural events and festivals,
and interacting with locals. Learning a few phrases in the local language can also go a
long way in making connections and showing respect.

          <br />
          <br />
          Before embarking on your journey, take the time to research your destination. This
includes understanding the local culture, customs, and laws, as well as identifying top
attractions, restaurants, and accommodations. Doing so will help you navigate your
destination with confidence and avoid any cultural faux pas.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in
tellus.
        </p>
      </div>
    </div>
  );
}