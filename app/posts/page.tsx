import PostList from "@/components/PostList";
export default function Post() {
  return (
    <section className="w-full relative flex flex-col items-center mt-6">
      <h1 className="text-xl text-center font-extrabold">Random Musings</h1>
      <div className="max-h-full ">
        <PostList />
      </div>
    </section>
  );
}
