import { RefObject, useRef, useState } from "react";

export function getRefValue<T>(ref: RefObject<T>) {
	return ref.current as T;
}

export function useSwiperRef<S>(
	defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
	const swipeRef = useRef(defaultValue);
	const [swipe, _setswipe] = useState(defaultValue);
	function setSwipe(value: S) {
		_setswipe(value);
		swipeRef.current = value;
	}

	return [swipe, setSwipe, swipeRef];
}
