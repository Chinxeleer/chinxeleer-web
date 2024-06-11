import React from "react";

import Link from "next/link";
import { formateDate } from "@/lib/utils";

interface Props {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const PostItem = ({ slug, title, description, date }: Props) => {
  return (
    <div>
      <Link href={slug}>
        <div className="w-[600px] px-4 py-2 mt-4">
          <h1 className="font-medium ">
            Title: <span className="font-bold text-wrap">{title}</span>
          </h1>
          <p className="text-md p-2">{description}</p>
          <time className="font-bold" dateTime={date}>
            {formateDate(date)}
          </time>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
