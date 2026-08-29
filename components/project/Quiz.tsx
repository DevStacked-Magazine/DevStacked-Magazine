"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import sections from "@/components/project/questions.json";
import { useRouter } from "next/navigation";

type QuestionType = "text" | "email" | "textarea" | "single-choice";

type Question = {
	id: string;
	question: string;
	type: QuestionType;
	placeholder?: string;
	options?: string[];
	optional?: boolean;
	dependsOn?: {
		id: string;
		value: string;
	};
};

type QuestionSection = {
	id: string;
	section: string;
	description: string;
	questions: Question[];
};

type Answers = Record<string, string>;

const quizSections = sections as QuestionSection[];

export default function Quiz() {
	const [sectionIndex, setSectionIndex] = useState(0);
	const [answers, setAnswers] = useState<Answers>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const currentSection = quizSections[sectionIndex];
	const totalSections = quizSections.length;
	const progressValue = ((sectionIndex + 1) / totalSections) * 100;
	const isFirstSection = sectionIndex === 0;
	const isLastSection = sectionIndex === totalSections - 1;

	useEffect(() => {
		contentRef.current?.scrollTo(0, 0);
	}, [sectionIndex]);

	const canContinue = useMemo(
		() =>
			currentSection.questions.every((question) => {
				if (
					question.dependsOn &&
					answers[question.dependsOn.id] !== question.dependsOn.value
				) {
					return true;
				}

				if (question.optional) {
					return true;
				}

				return Boolean(answers[question.id]?.trim());
			}),
		[answers, currentSection.questions]
	);

	function updateAnswer(questionId: string, value: string) {
		setAnswers((currentAnswers) => ({
			...currentAnswers,
			[questionId]: value,
		}));

		if (submitMessage) {
			setSubmitMessage(null);
		}
	}

	function goBack() {
		if (!isFirstSection) {
			setSectionIndex((currentIndex) => currentIndex - 1);
		}
	}

	function goForward() {
		if (!isLastSection) {
			setSectionIndex((currentIndex) => currentIndex + 1);
		}
	}

	async function submitProject() {
		if (!canContinue) {
			setSubmitMessage({
				type: "error",
				text: "Please complete the required answers before submitting.",
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitMessage(null);

		try {
			setSubmitMessage({
				type: "success",
				text: "Project intake completed.",
			});
			setAnswers({});
			setSectionIndex(0);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="h-full min-h-0 w-full">
			<div className="mx-auto flex h-full min-h-0 w-full flex-col">
			<div className="shrink-0 border-b border-line/70 py-4 sm:py-5">
				<div className="mx-auto flex w-full max-w-6xl items-center gap-3">
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={goBack}
						disabled={isFirstSection}
						className="h-11 w-11 border border-line px-0 text-ink-dim hover:bg-board-card hover:text-ink"
					>
						<ArrowLeftIcon className="h-4 w-4" />
					</Button>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={() => router.push("/")}
						className="h-11 w-11 border border-line px-0 text-ink-dim hover:bg-board-card hover:text-ink"
					>
						<Home className="h-4 w-4" />
					</Button>
					<div className="flex-1">
						<div className="mb-1.5 flex items-center justify-between gap-4">
							<span className="meta-label text-red-active">
								Section {sectionIndex + 1} of {totalSections}
							</span>
							<span className="text-sm text-ink-faint sm:text-base">
								{currentSection.section}
							</span>
						</div>
						<Progress
							value={progressValue}
							className="h-2 bg-board **:data-[slot=progress-indicator]:bg-red-active"
						/>
					</div>
				</div>
			</div>

			<div ref={contentRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-8 sm:py-10 lg:py-12">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSection.id}
						className="w-full"
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -14 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
					>
						<div className="mx-auto grid min-h-full w-full max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-20">
							<div className="max-w-lg lg:sticky lg:top-8 lg:self-start lg:pt-8">
								<p className="meta-label text-red-active">
									Your brief
								</p>
								<h1 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-ink">
									{currentSection.section}
								</h1>
								<p className="mt-4 max-w-2xl text-base leading-7 text-ink-dim">
									{currentSection.description}
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								{currentSection.questions.map((question) => {
									const isVisible =
										!question.dependsOn ||
										answers[question.dependsOn.id] === question.dependsOn.value;

									if (!isVisible) {
										return null;
									}

									return (
									<div
										key={question.id}
										className={`w-full rounded-2xl border border-line bg-board/40 p-5 sm:p-6 ${
											question.type === "textarea" ? "sm:col-span-2" : ""
										}`}
									>
										<label
											htmlFor={question.id}
											className="mb-3 block text-base font-semibold text-ink"
										>
											{question.question}
											{question.optional ? (
												<span className="meta-label ml-2 text-ink-faint">
													Optional
												</span>
											) : null}
										</label>

										{(question.type === "text" || question.type === "email") && (
											<input
												id={question.id}
												type={question.type}
												value={answers[question.id] ?? ""}
												onChange={(event) => updateAnswer(question.id, event.target.value)}
												placeholder={question.placeholder}
														className="h-12 w-full rounded-2xl border border-line bg-board px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-red-active focus:bg-board-card"
											/>
										)}

										{question.type === "textarea" && (
											<textarea
												id={question.id}
												value={answers[question.id] ?? ""}
												onChange={(event) => updateAnswer(question.id, event.target.value)}
												placeholder={question.placeholder}
												rows={4}
														className="w-full rounded-2xl border border-line bg-board px-4 py-3.5 text-sm leading-6 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-red-active focus:bg-board-card"
											/>
										)}

										{question.type === "single-choice" && question.options && (
											<div className="grid gap-3 sm:grid-cols-2">
												{question.options.map((option) => {
													const isSelected = answers[question.id] === option;

													return (
														<button
															key={option}
															type="button"
															onClick={() => updateAnswer(question.id, option)}
															className={`flex min-h-14 items-center justify-between gap-4 rounded-full border px-5 py-3 text-left text-sm font-medium transition-colors ${
																isSelected
																	? "border-red-active bg-red-active text-white"
																	: "border-line bg-board text-ink-dim hover:border-line-strong hover:bg-board-card hover:text-ink"
															}`}
															aria-pressed={isSelected}
														>
															{option}
														</button>
													);
												})}
											</div>
										)}
									</div>
									);
								})}
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="shrink-0 border-t border-line/70 pb-5 pt-4 sm:pb-6">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<p
						aria-live="polite"
						className={`text-xs sm:text-sm ${
							submitMessage
								? submitMessage.type === "success"
									? "text-green-300"
									: "text-red-300"
									: "text-ink-dim"
						}`}
					>
						{submitMessage
							? submitMessage.text
							: isLastSection
								? "Finish this section to complete the intake."
								: "Complete this section to move to the next one."}
					</p>

					<div className="flex flex-wrap gap-2">
						{!isFirstSection && (
							<Button type="button" variant="ghost" size="sm" onClick={goBack} className="border border-line">
								Back
							</Button>
						)}

						<Button
							type="button"
							variant="primary"
							size="sm"
							onClick={isLastSection ? submitProject : goForward}
							disabled={!canContinue || isSubmitting}
							isLoading={isSubmitting}
							rightIcon={
								!isLastSection && !isSubmitting ? (
									<ArrowRightIcon className="h-4 w-4" />
								) : undefined
							}
						>
							{isLastSection ? "Complete Intake" : "Next Section"}
						</Button>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}
