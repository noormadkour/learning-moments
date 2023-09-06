import "./Post.css"

export const Post = ({ postObj }) => {
  return (
    <div className="post">
      <div>
        <div className="post-info">Title</div>
        <div>{postObj.postTitle}</div>
      </div>
      <div>
        <div className="post-info">Post Body</div>
        <div>{postObj.postBody}</div>
      </div>
      <div>
        <div className="post-info">User ID</div>
        <div>{postObj.userCreated}</div>
      </div>
    </div>
  );
};
