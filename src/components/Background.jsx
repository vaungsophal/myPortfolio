import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

	useEffect(() => {
		let currentScroll = 0
		let requestId

		const handleScroll = () => {
			const newScroll = window.pageYOffset
			const scrollDelta = newScroll - currentScroll
			currentScroll = newScroll

			blobRefs.current.forEach((blob, index) => {
				if (!blob) return;
				const initialPos = initialPositions[index]

				const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 200
				const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40

				const x = initialPos.x + xOffset
				const y = initialPos.y + yOffset

				blob.style.transform = `translate(${x}px, ${y}px)`
				blob.style.transition = "transform 1.4s ease-out"
			})

			requestId = requestAnimationFrame(handleScroll)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			cancelAnimationFrame(requestId)
		}
	}, [])

	return (
		<div className="fixed inset-0 -z-10">
			{/* Base Dark Background */}
			<div className="absolute inset-0 bg-[#0c0c0c]"></div>

			{/* Vertical Grid Lines - Matching the reference image */}
			<div className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px)`,
					backgroundSize: '100px 100%'
				}}>
			</div>

			{/* Subtle Blobs */}
			<div className="absolute inset-0 overflow-hidden">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 md:w-[500px] md:h-[500px] w-72 h-72 bg-accent/5 rounded-full filter blur-[120px] opacity-30 md:opacity-20 animate-pulse-glow"></div>
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-1/4 -right-4 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[120px] opacity-30 md:opacity-10 hidden sm:block"></div>
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[120px] opacity-30 md:opacity-10 animate-pulse-glow"></div>
			</div>

			{/* Overlay to ensure readability */}
			<div className="absolute inset-0 bg-transparent"></div>
		</div>
	)
}

export default AnimatedBackground
