"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  Home,
  RotateCcw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-presets";
import Button from "@/components/ui/Button";
import sections from "@/components/project/questions.json";

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

function CompletionScreen({
  onRestart,
  onHome,
}: {
  onRestart: () => void;
  onHome: () => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-6 py-10 sm:px-10"
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:26px_26px] opacity-30" />
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <div className="intake-complete-reveal relative mb-10 flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-active" />
          </motion.div>
          <motion.div
            className="absolute inset-5 rounded-full border border-white/10 border-dashed"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            initial={{ scale: 0.65, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-red-active bg-red-active text-white sm:h-24 sm:w-24"
          >
            <Check className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.6} />
          </motion.div>
        </div>

        <p className="intake-complete-reveal font-mono text-[10px] uppercase tracking-[0.22em] text-red-active">Brief received</p>
        <h1 className="intake-complete-reveal mt-5 max-w-xl font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
          You&apos;re in motion.
        </h1>
        <p className="intake-complete-reveal mt-6 max-w-md text-base leading-7 text-white/55 sm:text-lg">
          Your project brief is with us. We&apos;ll review the details and come back with a thoughtful next step.
        </p>

        <div className="intake-complete-reveal mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onHome}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Back to home <ArrowUpRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Start another brief <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default function Quiz() {
  const root = useRef<HTMLDivElement>(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  const currentSection = quizSections[sectionIndex];
  const totalSections = quizSections.length;
  const progressValue = ((sectionIndex + 1) / totalSections) * 100;
  const isFirstSection = sectionIndex === 0;
  const isLastSection = sectionIndex === totalSections - 1;

  const visibleQuestions = currentSection.questions.filter(
    (question) =>
      !question.dependsOn ||
      answers[question.dependsOn.id] === question.dependsOn.value,
  );

  const canContinue = useMemo(
    () =>
      visibleQuestions.every(
        (question) => question.optional || Boolean(answers[question.id]?.trim()),
      ),
    [answers, visibleQuestions],
  );

  useGSAP(
    () => {
      const questions = gsap.utils.toArray<HTMLElement>(".intake-question");
      if (questions.length) {
        gsap.fromTo(
          questions,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.07,
            ease: "expo.out",
          },
        );
      }

      const completionItems = gsap.utils.toArray<HTMLElement>(".intake-complete-reveal");
      if (completionItems.length) {
        gsap.fromTo(
          completionItems,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "expo.out",
          },
        );
      }
    },
    { scope: root, dependencies: [sectionIndex, isComplete], revertOnUpdate: true },
  );

  function updateAnswer(questionId: string, value: string) {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [questionId]: value }));
    setSubmitMessage(null);
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
      setAnswers({});
      setSectionIndex(0);
      setIsComplete(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function restartIntake() {
    setAnswers({});
    setSectionIndex(0);
    setSubmitMessage(null);
    setIsComplete(false);
  }

  return (
    <div ref={root} className="flex h-full min-h-0 w-full max-w-none">
      <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#191919]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-active/80 to-transparent" />

        {isComplete ? (
          <CompletionScreen onRestart={restartIntake} onHome={() => router.push("/")} />
        ) : (
          <>
        <header className="relative flex flex-col gap-5 border-b border-white/10 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
              aria-label="Return home"
            >
              <Home className="h-4 w-4" />
            </button>
            <div>
              <p className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-white/45">New project</p>
              <p className="mt-1 text-sm font-medium text-white">Tell us what&apos;s ahead.</p>
            </div>
          </div>

          <div className="w-full max-w-md lg:mx-8 lg:flex-1">
            <div className="mb-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-white/45">
              <span>Progress</span>
              <span className="text-white/75">{sectionIndex + 1} / {totalSections}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-red-active"
                animate={{ width: `${progressValue}%` }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <div className="hidden items-center gap-2 text-xs text-white/45 lg:flex">
            {quizSections.map((section, index) => (
              <span
                key={section.id}
                className={`h-1.5 w-1.5 rounded-full ${index <= sectionIndex ? "bg-red-active" : "bg-white/15"}`}
              />
            ))}
          </div>
        </header>

        <div className="relative grid min-h-0 flex-1 lg:grid-cols-[minmax(13rem,0.36fr)_1fr]">
          <aside className="no-scrollbar hidden overflow-y-auto border-r border-white/10 p-10 lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-active">The brief</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              A few good answers are enough to begin.
            </h1>
            <p className="mt-6 max-w-[15rem] text-sm leading-6 text-white/50">
              No pitch decks. No pressure. Just the context we need to make the next conversation useful.
            </p>

            <div className="mt-14 space-y-4">
              {quizSections.map((section, index) => {
                const isActive = index === sectionIndex;
                const isComplete = index < sectionIndex;

                return (
                  <div key={section.id} className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-medium ${isActive ? "border-red-active bg-red-active text-white" : isComplete ? "border-white/20 bg-white/10 text-white" : "border-white/10 text-white/30"}`}>
                      {isComplete ? <Check className="h-3 w-3" /> : index + 1}
                    </span>
                    <span className={`text-sm ${isActive ? "font-medium text-white" : "text-white/35"}`}>{section.section}</span>
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="flex min-h-0 min-w-0 flex-col p-5 sm:p-8 lg:p-12">
            <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                key={currentSection.id}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="max-w-3xl">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-active">{currentSection.section}</p>
                  <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                    {isFirstSection ? "Let's get acquainted." : currentSection.section}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">{currentSection.description}</p>
                </div>

                <div className="mt-10 grid gap-6">
                  {visibleQuestions.map((question) => {
                    const selectedValue = answers[question.id] ?? "";

                    return (
                      <fieldset key={question.id} className="intake-question min-w-0 border-0 p-0">
                        <legend className="max-w-2xl text-base font-medium leading-6 text-white">
                          {question.question}
                          {question.optional ? <span className="ml-2 text-xs font-normal text-white/40">Optional</span> : null}
                        </legend>

                        {(question.type === "text" || question.type === "email") && (
                          <input
                            id={question.id}
                            type={question.type}
                            value={selectedValue}
                            onChange={(event) => updateAnswer(question.id, event.target.value)}
                            placeholder={question.placeholder}
                            className="mt-3 h-13 w-full rounded-xl border border-white/12 bg-white/[0.035] px-4 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-red-active focus:bg-white/[0.06]"
                          />
                        )}

                        {question.type === "textarea" && (
                          <textarea
                            id={question.id}
                            value={selectedValue}
                            onChange={(event) => updateAnswer(question.id, event.target.value)}
                            placeholder={question.placeholder}
                            rows={5}
                            className="mt-3 w-full resize-y rounded-xl border border-white/12 bg-white/[0.035] px-4 py-4 text-base leading-6 text-white outline-none transition-colors placeholder:text-white/28 focus:border-red-active focus:bg-white/[0.06]"
                          />
                        )}

                        {question.type === "single-choice" && question.options && (
                          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {question.options.map((option) => {
                              const isSelected = selectedValue === option;

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => updateAnswer(question.id, option)}
                                  className={`group flex min-h-16 items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all duration-300 ${isSelected ? "border-red-active bg-red-active text-white" : "border-white/10 bg-white/[0.025] text-white/68 hover:border-white/30 hover:bg-white/[0.06]"}`}
                                >
                                  <span>{option}</span>
                                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${isSelected ? "border-white bg-white text-red-active" : "border-white/20 text-transparent group-hover:border-white/45"}`}>
                                    <Check className="h-3 w-3" />
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </fieldset>
                    );
                  })}
                </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex shrink-0 flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p
                aria-live="polite"
                className={`max-w-md text-sm leading-6 ${submitMessage ? (submitMessage.type === "success" ? "text-green-300" : "text-red-300") : "text-white/45"}`}
              >
                {submitMessage?.text ?? (isLastSection ? "You're nearly there. Add any final context, then send it through." : "Your answers save as you move through the brief.")}
              </p>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                {!isFirstSection && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="flex h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                )}
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={isLastSection ? submitProject : goForward}
                  disabled={!canContinue || isSubmitting}
                  isLoading={isSubmitting}
                  rightIcon={!isLastSection && !isSubmitting ? <ArrowRight className="h-4 w-4" /> : undefined}
                  className="min-w-40"
                >
                  {isLastSection ? "Send project brief" : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}
