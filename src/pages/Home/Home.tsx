import { Component, Fragment } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";

type PostDetails = {
  id: string;
  title: string;
  description: React.ReactNode;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};

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
          description: (
            <p>
              Lecture D01 - Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Eligendi alias laborum accusantium iusto molestias. Magnam
              nisi atque, nihil, ex quaerat quam velit deserunt consequatur
              soluta pariatur cumque accusamus consequuntur. Quidem! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Eligendi alias
              laborum accusantium iusto molestias. Magnam nisi atque, nihil, ex
              quaerat quam velit deserunt consequatur soluta pariatur cumque
              accusamus consequuntur. Quidem! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi alias laborum accusantium
              iusto molestias. Magnam nisi atque, nihil, ex quaerat quam velit
              deserunt consequatur soluta pariatur cumque accusamus
              consequuntur. Quidem!
            </p>
          ),
          hoursCount: 8,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture Day 02",
          description: (
            <p>
              Lecture D02 - Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Eligendi alias laborum accusantium iusto molestias. Magnam
              nisi atque, nihil, ex quaerat quam velit deserunt consequatur
              soluta pariatur cumque accusamus consequuntur. Quidem! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Eligendi alias
              laborum accusantium iusto molestias. Magnam nisi atque, nihil, ex
              quaerat quam velit deserunt consequatur soluta pariatur cumque
              accusamus consequuntur. Quidem! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi alias laborum accusantium
              iusto molestias. Magnam nisi atque, nihil, ex quaerat quam velit
              deserunt consequatur soluta pariatur cumque accusamus
              consequuntur. Quidem!
            </p>
          ),
          hoursCount: 6,
          lecturerName: "Chanu",
          tags: ["react", "tailwind"],
        },
        {
          id: "3",
          title: "Lecture Day 03",
          description: (
            <p>
              Lecture D03 - Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Eligendi alias laborum accusantium iusto molestias. Magnam
              nisi atque, nihil, ex quaerat quam velit deserunt consequatur
              soluta pariatur cumque accusamus consequuntur. Quidem! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Eligendi alias
              laborum accusantium iusto molestias. Magnam nisi atque, nihil, ex
              quaerat quam velit deserunt consequatur soluta pariatur cumque
              accusamus consequuntur. Quidem! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi alias laborum accusantium
              iusto molestias. Magnam nisi atque, nihil, ex quaerat quam velit
              deserunt consequatur soluta pariatur cumque accusamus
              consequuntur. Quidem!
            </p>
          ),
          tags: ["Lifecycle", "rounting", "structure"],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-20">
          {this.state.postList.map((post, index) => (
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
