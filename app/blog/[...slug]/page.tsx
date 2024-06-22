import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { formateDate } from "@/lib/utils";
import "@/styles/mdx.css";

interface PostPageProps {
  params: { slug: string[] };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className="container py-6 prose  prose-code:text-purple-400 prose-headings:text-orange-200 prose-p:text-orange-100  prose-strong:text-orange-500  prose-a:text-amber-300 max-w-[480px] xl:max-w-3xl prose-p:text-[15px] mx-auto">
      <h1 className="mb-2 text-center xl:text-3xl text-[25px]">{post.title}</h1>
      <time className="text-slate-400 text-sm mt-2" dateTime={post.date}>
        {formateDate(post.date)}
      </time>
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
};

export default PostPage;
