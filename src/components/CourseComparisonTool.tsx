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
    /*{ key: "studentsEnrolled", label: "Students", icon: Users, format: (val: number) => `${val.toLocaleString()}+` },*/
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
            className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-background border border-border/50 mb-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 md:p-8 border-b border-border/30 bg-gradient-to-r from-neon-purple/10 via-background to-neon-cyan/10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Course Comparison</h2>
                  <p className="text-muted-foreground text-sm">Compare up to 3 courses side by side</p>
                </div>
              </div>
            </div>

            {/* Course Selection Grid */}
            <div className="p-6 md:p-8">
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
                      <div className="glass-card rounded-2xl p-4 h-full border-2 border-neon-purple/30">
                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveCourse(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-white flex items-center justify-center text-xs hover:bg-destructive/80 transition-colors"
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
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-neon-purple/80 text-white">
                              {course.category}
                            </span>
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-lg mb-1">{course.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{course.tagline}</p>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02, borderColor: "hsl(var(--neon-purple))" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowSelector(index)}
                        className="w-full h-full min-h-[200px] rounded-2xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-3 hover:bg-muted/20 transition-all group"
                      >
                        <div className="w-14 h-14 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                          <Plus className="w-6 h-6 text-muted-foreground group-hover:text-neon-purple transition-colors" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
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
                          className="absolute top-full left-0 right-0 mt-2 z-50 bg-background border border-border rounded-2xl shadow-xl max-h-80 overflow-y-auto"
                        >
                          <div className="p-2">
                            {getAvailableCourses().map((c) => (
                              <motion.button
                                key={c.id}
                                whileHover={{ backgroundColor: "hsl(var(--muted))" }}
                                onClick={() => handleSelectCourse(index, c)}
                                className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors"
                              >
                                <img 
                                  src={c.image} 
                                  alt={c.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-medium truncate">{c.title}</h5>
                                  <p className="text-xs text-muted-foreground">{c.category} • {c.duration}</p>
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
                      <tr className="border-b border-border/30">
                        <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                        {selectedCourses.map((course, index) => (
                          <th key={index} className="p-4 text-center">
                            {course && (
                              <span className="font-bold gradient-text">{course.title}</span>
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
                          className="border-b border-border/20 hover:bg-muted/10 transition-colors"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
                                <row.icon className="w-4 h-4 text-neon-purple" />
                              </div>
                              <span className="font-medium">{row.label}</span>
                            </div>
                          </td>
                          {selectedCourses.map((course, index) => (
                            <td key={index} className="p-4 text-center">
                              {course && (
                                <span className="text-sm font-medium">
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
                        className="border-b border-border/20"
                      >
                        <td className="p-4 align-top">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 flex items-center justify-center">
                              <Check className="w-4 h-4 text-neon-green" />
                            </div>
                            <span className="font-medium">Highlights</span>
                          </div>
                        </td>
                        {selectedCourses.map((course, index) => (
                          <td key={index} className="p-4 align-top">
                            {course && (
                              <div className="space-y-2">
                                {course.highlights.slice(0, 4).map((highlight, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    <Check className="w-3 h-3 text-neon-green flex-shrink-0" />
                                    <span>{highlight}</span>
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
                          className="neon-button text-white"
                          onClick={onClose}
                        >
                          <Zap className="w-4 h-4 mr-2" />
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
                  <div className="w-20 h-20 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Select at least 2 courses</h3>
                  <p className="text-muted-foreground">Add courses above to compare their features side by side</p>
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
