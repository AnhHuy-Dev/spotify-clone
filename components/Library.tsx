"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@/providers/UserContextProvider";
import useAuth from "@/hooks/useAuth";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

function Library({ songs }: { songs: Song[] }) {
	const { user } = useUser();
	const authModal = useAuth();
	const uploadModal = useUploadModal();
	const onPlay = useOnPlay(songs);
	const onClick = () => {
		if (!user) return authModal.onOpen();

		//Todo: Check subscriptions
		return uploadModal.onOpen();
	};

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist size={26} className="text-neutral-400" />
					<p className="text-neutral-400 font-medium text-md">Your library</p>
				</div>
				<AiOutlinePlus onClick={onClick} className="text-neutral-400 cursor-pointer hover:text-white transition" />
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3">
				{songs.map((item) => (
					<MediaItem key={item.id} data={item} onClick={(id: string) => onPlay(id)} />
				))}
			</div>
		</div>
	);
}

export default Library;