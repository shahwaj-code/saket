import { useState } from "react";
import { ArrowLeft, ArrowRight, User, X, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { allStudentWork, studentNames } from "@/data/studentWork";
import StickyButtons from "@/components/StickyButtons";
import ResponsiveImage from "@/components/ResponsiveImage";

const imageModules = import.meta.glob('/src/assets/student_work/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  as: "url",
});

const titleize = (value: string) =>
  value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\s+/g, " ")
    .trim();

const additionalImages = Object.entries(imageModules)
  .filter(([path]) => !/main-card|slider/i.test(path))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => {
    const filename = path.split("/").pop()?.replace(/\.(webp|jpe?g|png)$/i, "") ?? "";
    return {
      id: path,
      title: titleize(filename),
      url: url as string,
    };
  });

const StudentWork = () => {
  const studentWorkItems = allStudentWork;
  const galleryItems = [
    ...studentWorkItems.map((item) => ({
      type: "slider" as const,
      id: item.id,
      title: item.title,
      student: item.student,
      images: item.images ?? [item.image],
    })),
    ...additionalImages.map((image, index) => ({
      type: "image" as const,
      id: image.id,
      title: image.title,
      url: image.url,
      student: studentNames[index % studentNames.length] ?? "Student Work",
    })),
  ];

  const [activeImageIndices, setActiveImageIndices] = useState<number[]>(
    Array(studentWorkItems.length).fill(0)
  );

  // Modal state
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Modal navigation functions
  const handlePrev = () => {
    if (!selectedItem) return;
    const images = selectedItem.type === "slider" ? selectedItem.images : [selectedItem.url];
    setSelectedSlide((prev) =>
      images.length > 0
        ? prev === 0
          ? images.length - 1
          : prev - 1
        : 0,
    );
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const images = selectedItem.type === "slider" ? selectedItem.images : [selectedItem.url];
    setSelectedSlide((prev) =>
      images.length > 0
        ? prev === images.length - 1
          ? 0
          : prev + 1
        : 0,
    );
  };

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setSelectedSlide(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedSlide(0);
  };

  const changeSlide = (cardIndex: number, delta: number) => {
    setActiveImageIndices((prev) => {
      const next = [...prev];
      const images = studentWorkItems[cardIndex].images ?? [studentWorkItems[cardIndex].image];
      next[cardIndex] = (next[cardIndex] + delta + images.length) % images.length;
      return next;
    });
  };

  return (
    <>
      <section className="min-h-screen bg-[#030306] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffc107]/10 text-[#ffc107] text-sm font-medium border border-[#ffc107]/20 mx-auto">
              Production-Ready Portfolios
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">Delhi Student Work</h1>
            <p className="text-white/60 max-w-3xl mx-auto mt-4">
              Explore premium showreels from our Delhi batch alumni now working at elite AVGC studios worldwide
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center mt-6 rounded-full bg-white/5 border border-[#ffc107]/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Back to Home
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => {
              if (item.type === "slider") {
                const activeIndex = activeImageIndices[index] ?? 0;
                const activeImage = item.images[activeIndex];

                return (
                  <article
                    key={item.id}
                    className="rounded-3xl overflow-hidden bg-white/5 border border-[#ffc107]/10 shadow-[0_0_30px_rgba(255,193,7,0.08)] cursor-pointer group"
                    onClick={() => openModal(item)}
                  >
                    <div className="relative overflow-hidden bg-[#08080a]">
                      <div className="aspect-video overflow-hidden">
                        <ResponsiveImage
                          src={activeImage}
                          alt={`${item.title} slide ${activeIndex + 1}`}
                          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>

                      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] rounded-full p-3 shadow-lg"
                        >
                          <Maximize2 className="w-5 h-5 text-black" />
                        </motion.div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          changeSlide(index, -1);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          changeSlide(index, 1);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                        {item.images.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`h-2 w-2 rounded-full ${dotIndex === activeIndex ? "bg-[#ffc107]" : "bg-white/30"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <User className="w-4 h-4 text-[#ffc107]" />
                        {item.student}
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-white/5 border border-[#ffc107]/10 shadow-[0_0_30px_rgba(255,193,7,0.08)] cursor-pointer group"
                  onClick={() => openModal(item)}
                >
                  <div className="relative overflow-hidden bg-[#08080a]">
                    <div className="aspect-video sm:aspect-[4/3] overflow-hidden">
                      <ResponsiveImage
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] rounded-full p-3 shadow-lg"
                      >
                        <Maximize2 className="w-5 h-5 text-black" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <User className="w-4 h-4 text-[#ffc107]" />
                      {item.student}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#030306] border border-[#ffc107]/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors border border-[#ffc107]/30 hover:border-[#ffc107]/50"
                  >
                    <X className="w-5 h-5 text-[#ffc107]" />
                  </button>

                  {/* Image Display */}
                  <div className="relative">
                    <ResponsiveImage
                      src={selectedItem.type === "slider" ? selectedItem.images[selectedSlide] : selectedItem.url}
                      alt={selectedItem.title}
                      className="w-full h-auto max-h-[80vh] object-contain"
                      sizes="100vw"
                    />

                    {(selectedItem.type === "slider" ? selectedItem.images.length : 1) > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/90"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/90"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-sm sm:text-lg md:text-2xl font-semibold text-white text-left leading-tight break-words max-w-full">
                          {selectedItem.title}
                        </h3>

                        <span className="text-xs sm:text-sm text-white/60 ml-2 whitespace-nowrap">
                          {selectedSlide + 1} / {(selectedItem.type === "slider" ? selectedItem.images.length : 1)}
                        </span>
                      </div>

                      {selectedItem.student && (
                        <p className="text-white/60 text-xs sm:text-sm mt-1">by {selectedItem.student}</p>
                      )}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffc107] to-[#ffd54f] to-transparent" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <StickyButtons />
    </>
  );
};

export default StudentWork;
