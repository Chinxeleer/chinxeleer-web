import PostList from "@/components/PostList";
export default function Post() {
  return (
    <section className="relative mt-32">
      <h1 className="text-xl text-center font-extrabold">Random Musings</h1>
      <div className="max-h-full overflow-auto ">
        <PostList />
      </div>
    </section>
  );
}
