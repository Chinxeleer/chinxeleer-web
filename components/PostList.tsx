import { Post } from "@/.velite";
import PostItem from "./PostItem";

interface PostsProp {
  slug: string;
  title: string;
  date: string;
  published: boolean;
  body: string;
  description?: string | undefined;
  slugAsParams: string;
}

type PostsArray = PostsProp[];

const PostList = (posts: Post[]) => {
  return (
    <section className="w-full">
      <div className="flex-1 flex flex-col divide-slate-500 divide-y gap-2 overflow-auto min-w-full">
        {posts.map((post) => {
          const { slug, title, description, date } = post;
          return (
            <li key={slug}>
              <PostItem
                slug={slug}
                title={title}
                description={description}
                date={date}
              />
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default PostList;
