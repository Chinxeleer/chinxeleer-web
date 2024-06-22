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
      <div className="w-inherit flex-1 px-4 py-2 xl:mt-4 flex flex-col text-pretty">
        <h1 className="font-bold xl:text-xl text-[20px]">{title}</h1>
        <p className="text-[11px] xl:text-xl px-2 my-2">{description}</p>
        <div className="">
          <time
            className="text-slate-400 xl:text-sm text-[11px] mt-2"
            dateTime={date}
          >
            {formateDate(date)}
          </time>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
