"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface Props {
	data: Song;
	onClick: (id: string) => void;
}

function SongItem({ data, onClick }: Props) {
	const image = useLoadImage(data);

	return (
		<div
			className="relative group flex flex-col items-center justify-center overflow-hidden gap-x-7 gap-3 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
			onClick={() => onClick(data.id)}>
			<div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
				<Image src={image || "/images/like.png"} alt="" fill className="object-cover" />
			</div>
			<div className="flex flex-col items-start w-full pt-4 gap-y-1">
				<p className="font-semibold truncate w-full">{data.title}</p>
				<p
					className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          ">
					By {data.author}
				</p>
				<div className="absolute bottom-24 right-5">
					<PlayButton />
				</div>
			</div>
		</div>
	);
}

export default SongItem;
