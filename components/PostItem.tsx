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
		<div className="mx-auto w-[600px] rounded-lg border border-slate-200 hover:border-slate-400">
			<Link href={slug}>
				<div className="w-[600px] px-4 py-2 mt-4">
					<h1 className="font-extrabold text-xl">{title}</h1>
					<p className="text-md  text-slate-500 px-2">{description}</p>
					<time className="text-slate-400 text-sm mt-2" dateTime={date}>
						{formateDate(date)}
					</time>
				</div>
			</Link>
		</div>
	);
};

export default PostItem;
