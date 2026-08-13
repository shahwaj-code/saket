import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  X, 
  Plus, 
  Check, 
  Clock, 
  Users, 
  Star, 
  Award, 
  ChevronDown,
  Sparkles,
  Trophy,
  Zap,
  Scale
} from "lucide-react";
import { Button } from "./ui/button";
import { coursesData, CourseData } from "@/data/courses";
import { Link } from "react-router-dom";

interface CourseComparisonToolProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: CourseData;
}

const CourseComparisonTool = ({ isOpen, onClose, initialCourse }: CourseComparisonToolProps) => {
  const [selectedCourses, setSelectedCourses] = useState<(CourseData | null)[]>([
    initialCourse || null,
    null,
    null,
  ]);
  const [showSelector, setShowSelector] = useState<number | null>(null);

  const handleSelectCourse = (index: number, course: CourseData) => {
    const newSelected = [...selectedCourses];
    newSelected[index] = course;
    setSelectedCourses(newSelected);
    setShowSelector(null);
  };

  const handleRemoveCourse = (index: number) => {
    const newSelected = [...selectedCourses];
    newSelected[index] = null;
    setSelectedCourses(newSelected);
  };

  const getAvailableCourses = () => {
    const selectedIds = selectedCourses.filter(c => c).map(c => c!.id);
    return coursesData.filter(course => !selectedIds.includes(course.id));
  };

  const comparisonRows = [
    { key: "duration", label: "Duration", icon: Clock },
    { key: "price", label: "Price", icon: Zap, format: (val: number) => `₹${val.toLocaleString()}` },
    { key: "level", label: "Level", icon: Award },
    { key: "rating", label: "Rating", icon: Star, format: (val: number) => `${val}/5 ⭐` },
    { key: "modules", label: "Modules", icon: Trophy, format: (val: any[]) => `${val.length} Modules` },
    { key: "tools", label: "Tools", icon: Sparkles, format: (val: string[]) => `${val.length} Tools` },
  ];

  const selectedCount = selectedCourses.filter(c => c).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-20 bg-black/90 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-[#030306] border border-[#ffc107]/20 mb-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ffc107]/5 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ffd54f]/5 rounded-full blur-[60px]" />
            </div>

            {/* Grid Effect */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,193,7,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,193,7,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Header */}
            <div className="relative p-6 md:p-8 border-b border-[#ffc107]/20 bg-gradient-to-r from-[#ffc107]/5 via-transparent to-[#ffd54f]/5">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-[#ffc107]/20"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffc107] via-[#ffd54f] to-[#ffb300] flex items-center justify-center">
                  <Scale className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    Course Comparison
                  </h2>
                  <p className="text-white/60 text-sm">Compare up to 3 courses side by side</p>
                </div>
              </div>
            </div>

            {/* Course Selection Grid */}
            <div className="relative p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {selectedCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {course ? (
                      <div className="bg-white/5 backdrop-blur-xl border-2 border-[#ffc107]/30 rounded-2xl p-4 h-full hover:border-[#ffc107]/50 transition-all duration-300">
                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveCourse(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center text-xs hover:bg-[#ffd54f] transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        
                        {/* Course Preview */}
                        <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030306] to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ffb300] text-black font-medium">
                              {course.category}
                            </span>
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-lg mb-1 text-white">{course.title}</h4>
                        <p className="text-sm text-white/60 line-clamp-2">{course.tagline}</p>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02, borderColor: "#ffc107" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowSelector(index)}
                        className="w-full h-full min-h-[200px] rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-all group"
                      >
                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ffc107]/10 transition-colors">
                          <Plus className="w-6 h-6 text-white/40 group-hover:text-[#ffc107] transition-colors" />
                        </div>
                        <span className="text-white/40 group-hover:text-white/80 transition-colors">
                          Add Course {index + 1}
                        </span>
                      </motion.button>
                    )}

                    {/* Course Selector Dropdown */}
                    <AnimatePresence>
                      {showSelector === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#030306] border border-[#ffc107]/20 rounded-2xl shadow-xl max-h-80 overflow-y-auto"
                        >
                          <div className="p-2">
                            {getAvailableCourses().map((c) => (
                              <motion.button
                                key={c.id}
                                whileHover={{ backgroundColor: "rgba(255,193,7,0.1)" }}
                                onClick={() => handleSelectCourse(index, c)}
                                className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors"
                              >
                                <img 
                                  src={c.image} 
                                  alt={c.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-medium truncate text-white">{c.title}</h5>
                                  <p className="text-xs text-white/60">{c.category} • {c.duration}</p>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Comparison Table */}
              {selectedCount >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-x-auto"
                >
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#ffc107]/20">
                        <th className="text-left p-4 text-white/60 font-medium">Feature</th>
                        {selectedCourses.map((course, index) => (
                          <th key={index} className="p-4 text-center">
                            {course && (
                              <span className="font-bold bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] bg-clip-text text-transparent">
                                {course.title}
                              </span>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, rowIndex) => (
                        <motion.tr
                          key={row.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: rowIndex * 0.05 }}
                          className="border-b border-[#ffc107]/10 hover:bg-white/5 transition-colors"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffc107]/20 to-[#ffd54f]/20 flex items-center justify-center">
                                <row.icon className="w-4 h-4 text-[#ffc107]" />
                              </div>
                              <span className="font-medium text-white">{row.label}</span>
                            </div>
                          </td>
                          {selectedCourses.map((course, index) => (
                            <td key={index} className="p-4 text-center">
                              {course && (
                                <span className="text-sm font-medium text-white/80">
                                  {row.format 
                                    ? row.format((course as any)[row.key])
                                    : (course as any)[row.key]
                                  }
                                </span>
                              )}
                            </td>
                          ))}
                        </motion.tr>
                      ))}

                      {/* Highlights Row */}
                      <motion.tr
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border-b border-[#ffc107]/10"
                      >
                        <td className="p-4 align-top">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffc107]/20 to-[#ffd54f]/20 flex items-center justify-center">
                              <Check className="w-4 h-4 text-[#ffc107]" />
                            </div>
                            <span className="font-medium text-white">Highlights</span>
                          </div>
                        </td>
                        {selectedCourses.map((course, index) => (
                          <td key={index} className="p-4 align-top">
                            {course && (
                              <div className="space-y-2">
                                {course.highlights.slice(0, 4).map((highlight, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    <Check className="w-3 h-3 text-[#ffc107] flex-shrink-0" />
                                    <span className="text-white/70">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    </tbody>
                  </table>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    {selectedCourses.filter(c => c).map((course) => (
                      <Link key={course!.id} to={`/course/${course!.slug}`}>
                        <Button 
                          className="bg-gradient-to-r from-[#ffc107] via-[#ffd54f] to-[#ffb300] text-black font-bold rounded-full px-6 py-6 hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all duration-300"
                          onClick={onClose}
                        >
                          <Zap className="w-4 h-4 mr-2 text-black" />
                          Enroll in {course!.title}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Empty State */}
              {selectedCount < 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-[#ffc107]/20">
                    <Scale className="w-10 h-10 text-[#ffc107]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Select at least 2 courses</h3>
                  <p className="text-white/60">Add courses above to compare their features side by side</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseComparisonTool;