import { QueryPagination } from "@/components/query-pagination";
import PostItem from "@/components/PostItem";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";

const POSTS_PER_PAGE = 4;
interface BlogPageProps {
  searchParams: { page?: string };
}

export default function Post({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totolPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );

  return (
    <section className="w-full relative flex flex-col items-center mt-6">
      <h1 className="text-xl text-center font-extrabold">Random Musings</h1>
      <div className="flex-1 flex flex-col divide-slate-500 divide-y gap-2 overflow-auto min-w-full">
        {displayPosts.map((post) => {
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
      <QueryPagination totalPages={totolPages} className="justify-end mt-4" />
    </section>
  );
}
