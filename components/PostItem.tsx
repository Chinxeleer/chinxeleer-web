import React from "react";

import Link from "next/link";
import { formateDate } from "@/lib/utils";

type Props = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

const PostItem = ({ slug, title, description, date }: Props) => {
  return (
    <Link href={slug} className="text-slate-200 mx-auto">
      <div className="w-[600px] flex-1 px-4 py-2 mt-4 flex flex-col text-balance">
        <h1 className="font-bold text-xl underline decoration-slate-600 decoration-dashed decoration-2">
          {title}
        </h1>
        <p className="text-md px-2 my-2">{description}</p>
        <div className="">
          <time className="text-slate-400 text-sm mt-2" dateTime={date}>
            {formateDate(date)}
          </time>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
