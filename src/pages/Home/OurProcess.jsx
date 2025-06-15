import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    emoji: "💬",
    title: "Initial Consultation",
    description:
      "We begin by discussing your vision, preferences, and any specific requirements you have for your video. Whether you're looking for a romantic, cinematic style or a more upbeat, energetic feel, we'll tailor our approach to suit your needs.",
  },
  {
    id: 2,
    emoji: "📤",
    title: "Footage Submission",
    description:
      "Once we've established the direction for your video, you'll submit your raw footage to us securely. We accept footage from mediums including Google Drive and Dropbox.",
  },
  {
    id: 3,
    emoji: "✂️",
    title: "Creative Editing",
    description:
      "Our experienced editors will meticulously review each frame of your footage, selecting the best shots and moments to include in your video. Using advanced editing techniques, we'll craft a seamless narrative that captures the essence of your wedding day.",
  },
  {
    id: 4,
    emoji: "👁️",
    title: "Client Review",
    description:
      "Once the initial edit is complete, we'll provide you with a preview of your video for review. This is your opportunity to provide feedback and request any changes or adjustments you'd like to see.",
  },
  {
    id: 5,
    emoji: "🎨",
    title: "Final Touches",
    description:
      "After incorporating your feedback, we'll add the final touches to your video, including color grading, audio enhancements, and any additional effects or transitions. We'll ensure every detail is perfect before delivering the final version to you.",
  },
  {
    id: 6,
    emoji: "🚀",
    title: "Delivery",
    description:
      "Once your video is finalized, we'll deliver it to you in the format of your choice. We'll also provide you with instructions on how to link the project file if the video files sent to us are in the form of proxies.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-pastel text-primary py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-itali font-semibold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h2>
        <p className="text-center text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-12">
          Where we turn your raw footage into a captivating masterpiece...
        </p>

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 text-6xl">{step.emoji}</div>
              <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 max-w-2xl">
                <h3 className="text-xl md:text-2xl font-semibold itali text-darkBrown mb-2">
                  {step.id}. {step.title}
                </h3>
                <p className="text-sm md:text-base text-primary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
