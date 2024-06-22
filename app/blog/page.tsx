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
    <section className="w-full relative flex flex-col items-center">
      <h1 className="text-[32px] text-slate-200 text-center font-extrabold mb-10">
        Random Musings
      </h1>
      <div className="flex-1 flex flex-col gap-2 divide-y divide-dotted xl:max-w-[600px] max-w-[400px] text-[15px]  divide-slate-700 overflow-auto">
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
      <div className="relative bottom-0">
        <QueryPagination totalPages={totolPages} className="justify-end mt-4" />
      </div>
    </section>
  );
}
