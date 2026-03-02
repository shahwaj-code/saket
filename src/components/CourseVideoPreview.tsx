import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, VolumeX, Maximize } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

interface CourseVideoPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  videoUrl?: string;
  thumbnailUrl: string;
}

const CourseVideoPreview = ({
  isOpen,
  onClose,
  courseTitle,
  videoUrl,
  thumbnailUrl,
}: CourseVideoPreviewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setProgress(0);
    }
  }, [isOpen]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const prog = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(prog);
    }
  };

  // Demo video placeholder with animated preview
  const DemoPreview = () => (
    <div className="relative w-full aspect-video bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Animated Background */}
      <motion.img
        src={thumbnailUrl}
        alt={courseTitle}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isPlaying ? 1.1 : 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Animated overlay when "playing" */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-transparent to-neon-cyan/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Play/Pause Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayPause}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
            isPlaying 
              ? "bg-white/10 backdrop-blur-sm" 
              : "bg-gradient-to-r from-neon-purple to-neon-cyan shadow-neon"
          }`}
        >
          {isPlaying ? (
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-white rounded-sm" />
              <div className="w-2 h-8 bg-white rounded-sm" />
            </div>
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </motion.button>
      </div>

      {/* Fake Progress Bar */}
      {isPlaying && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 30, ease: "linear" }}
        />
      )}

      {/* Course Preview Label */}
      <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
        <span className="text-sm font-medium text-white">Course Preview</span>
      </div>

      {/* Demo Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10"
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-white">{courseTitle} Preview</h4>
            <p className="text-sm text-white/70">Experience our teaching methodology</p>
          </div>
          <Button 
            size="sm" 
            className="neon-button text-white"
            onClick={onClose}
          >
            Enroll Now
          </Button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            {/* Video Player */}
            {videoUrl ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={thumbnailUrl}
                  className="w-full aspect-video object-cover"
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  playsInline
                />
                
                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlayPause}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      {isPlaying ? (
                        <div className="flex gap-0.5">
                          <div className="w-1 h-4 bg-white rounded-sm" />
                          <div className="w-1 h-4 bg-white rounded-sm" />
                        </div>
                      ) : (
                        <Play className="w-4 h-4 text-white ml-0.5" />
                      )}
                    </motion.button>

                    {/* Progress Bar */}
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => videoRef.current?.requestFullscreen()}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      <Maximize className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>
            ) : (
              <DemoPreview />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseVideoPreview;
