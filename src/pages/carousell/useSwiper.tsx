import { RefObject, useRef, useState } from "react";

export function getRefValue<T>(ref: RefObject<T>) {
	return ref.current as T;
}

export function useSwiperRef<S>(
	defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
	const swipRef = useRef(defaultValue);
	const [swip, _setswip] = useState(defaultValue);
	function setSwip(value: S) {
		_setswip(value);
		swipRef.current = value;
	}

	return [swip, setSwip, swipRef];
}
