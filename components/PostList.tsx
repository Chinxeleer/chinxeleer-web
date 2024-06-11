import Link from "next/link";
import { posts } from "#site/content";
import PostItem from "./PostItem";
const PostList = () => {
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
