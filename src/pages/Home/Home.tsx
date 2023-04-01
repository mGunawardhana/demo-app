import { Component, Fragment } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { PostDetails } from "../../types/PostDetails";

type HomeProps = {};

type HomeState = {
  postList: PostDetails[];
};

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture Day 01",
          description:
            "This mystery of life is what really is at the heart of our concern, because we say it is a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it.",
          hoursCount: 8,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture Day 02",
          description:
            "This mystery of life is what really is at the heart of our concern, because we say it is a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it.",
          hoursCount: 6,
          lecturerName: "Maneesha",
          tags: ["intro", "typescript"],
        },
        {
          id: "3",
          title: "Lecture Day 03",
          description:
            "This mystery of life is what really is at the heart of our concern, because we say it is a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it.",
          tags: ["intro", "typescript", "basics"],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-20">
          {this.state.postList.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              hoursCount={post.hoursCount}
              lecturerName={post.lecturerName}
              tags={post.tags}
            />
          ))}
        </div>
      </>
    );
  }
}
