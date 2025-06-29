import React from "react";
import {
  Headset,
  UploadCloud,
  Scissors,
  Eye,
  Brush,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We begin by discussing your vision, preferences, and any specific requirements you have for your video. Whether you're looking for a romantic, cinematic style or a more upbeat, energetic feel, we'll tailor our approach to suit your needs.",
    icon: <Headset className="w-8 h-8 text-secondary" />,
  },
  {
    id: 2,
    title: "Footage Submission",
    description:
      "Once we've established the direction for your video, you'll submit your raw footage to us securely. We accept footage from mediums including Google Drive and Dropbox.",
    icon: <UploadCloud className="w-8 h-8 text-secondary" />,
  },
  {
    id: 3,
    title: "Creative Editing",
    description:
      "Our experienced editors will meticulously review each frame of your footage, selecting the best shots and moments to include in your video.",
    icon: <Scissors className="w-8 h-8 text-secondary" />,
  },
  {
    id: 4,
    title: "Client Review",
    description:
      "You'll receive a preview of your video to review. This is your chance to provide feedback and request edits.",
    icon: <Eye className="w-8 h-8 text-secondary" />,
  },
  {
    id: 5,
    title: "Final Touches",
    description:
      "We enhance your video with color grading, audio improvements, and final transitions—ensuring everything is polished to perfection.",
    icon: <Brush className="w-8 h-8 text-secondary" />,
  },
  {
    id: 6,
    title: "Delivery",
    description:
      "Once complete, your video is delivered in the format of your choice, with instructions for project linking if proxy files were used.",
    icon: <Rocket className="w-8 h-8 text-secondary" />,
  },
];

export default function OurProcess() {
  return (
    <section className="bg-cream text-darkBrown py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 border border-secondary py-2 rounded"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-wide text-olive mb-4 ">
            OUR PROCESS
          </h2>
          <p className="text-md md:text-lg italic text-muted max-w-2xl mx-auto">
            Where We Turn Your Raw Footage Into A Captivating Masterpiece. Here's How We Bring Your Vision To Life:
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h3 className="uppercase text-base md:text-lg font-semibold tracking-wide mb-2">
                  {step.title}
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
