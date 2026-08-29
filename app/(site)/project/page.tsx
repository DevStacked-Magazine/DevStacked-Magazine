"use client";

import Quiz from "@/components/project/Quiz";

function Project() {
	return (
		<section className="sheet-grid relative h-dvh min-h-0 overflow-hidden bg-board px-5 sm:px-8 lg:px-12">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-active/10 blur-3xl"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-red-active/8 blur-3xl"
			/>
			<div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-7xl items-center py-5 sm:py-8 lg:py-10">
				<Quiz />
			</div>
		</section>
	);
}

export default Project;
