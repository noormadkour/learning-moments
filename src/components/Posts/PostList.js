import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postServices";
import { Post } from "./Post";
import { getAllTopics } from "../../services/topicsService";

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([])
  const [selectedTopic, setSelectedTopic] = useState("")
  const [topicPosts, setTopicPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
      getAllPosts().then((postArray) => {
        setAllPosts(postArray);
      })
      
      getAllTopics().then((topicsArray) => {
        setAllTopics(topicsArray)
      });
    },
    []);

  useEffect(() => {
    if (selectedTopic > 0){
    const topicalPosts = allPosts.filter(post => post.topicId === parseInt(selectedTopic))
    setFilteredPosts(topicalPosts)
} else {
  setFilteredPosts(allPosts)
}}, [selectedTopic, allPosts])

  return (
    <div className="posts-container">
      <select className="filter" onChange={(event) => {setSelectedTopic(event.target.value)}}>
      <option key={0} value={0}>All Topics</option>
        {allTopics.map(topic => {
          return <option key={topic.id} value={topic.id}>{topic.topicName}</option>
        })}
      </select>
      {/* <h2> All Posts </h2> */}
      <div className="posts">
        {filteredPosts.map((postObj) => {
          return <Post key={postObj.id} postObj={postObj}/>;
        })}
      </div>
    </div>
  );
};
