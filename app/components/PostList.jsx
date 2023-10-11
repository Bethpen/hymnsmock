import Post from "./Post"


const PostList = ({posts}) => {
  return (
    <div className="flex w-full mt-7 gap-3 flex-wrap">
        {
            posts.map(post => <Post key={post.id} post={post} />)
        }
    </div>
  )
}

export default PostList