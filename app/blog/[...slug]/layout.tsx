import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function BlogArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="self-start text-slate-200">
        <Link
          href="/blog"
          className="absolute flex justify-start items-center "
        >
          <ArrowLeftIcon /> <p className="pl-4 text-sm">Back to Blog</p>
        </Link>
      </div>
      <div className="z-10">{children}</div>
    </>
  );
}
