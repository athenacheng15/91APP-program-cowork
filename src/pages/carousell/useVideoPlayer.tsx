import { useEffect, useState } from "react";

export default function useVideoPlayer(
	videoElement: React.MutableRefObject<HTMLVideoElement | null>
) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [isMuted, setIsMuted] = useState(false);

	function togglePlay() {
		setIsPlaying(!isPlaying);
	}

	useEffect(() => {
		isPlaying ? videoElement.current?.play() : videoElement.current?.pause();
	}, [isPlaying, videoElement]);

	function pauseVideo() {
		setIsPlaying(false);
	}

	function toggleMute() {
		setIsMuted(!isMuted);
	}

	useEffect(() => {
		if (videoElement.current) {
			isMuted
				? (videoElement.current.muted = true)
				: (videoElement.current.muted = false);
		}
	}, [isMuted, videoElement]);

	function handleOnTimeUpdate() {
		if (videoElement.current) {
			const progress =
				(videoElement.current.currentTime / videoElement.current.duration) *
				100;
			setProgress(progress);
		}
	}

	return {
		isPlaying,
		isMuted,
		togglePlay,
		pauseVideo,
		handleOnTimeUpdate,
		toggleMute,
	};
}
