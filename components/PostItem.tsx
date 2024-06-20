import React from "react";

import Link from "next/link";
import { formateDate } from "@/lib/utils";

type Props ={
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const PostItem = ({ slug, title, description, date }: Props) => {
  return (
		<div className="mx-auto w-[600px] h-[200px] text-slate-200 rounded-lg border border-slate-600">
			<Link href={slug} className="">
				<div className="w-[600px] flex-1 px-4 py-2 mt-4 flex flex-col">
					<h1 className="font-bold text-xl">{title}</h1>
					<p className="text-md px-2">{description}</p>
          <div className="">
					<time className="text-slate-400 text-sm mt-2" dateTime={date}>
						{formateDate(date)}
					</time>
          </div>
				</div>
			</Link>
		</div>
	);
};

export default PostItem;
