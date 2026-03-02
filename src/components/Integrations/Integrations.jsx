import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './Integrations.module.css';
import bgImage from '../../assets/integrations/Background.png';
import frame23 from '../../assets/integrations/frame23.svg';
import frame25 from '../../assets/integrations/frame25.svg';
import mainIcon from '../../assets/integrations/main icon.svg';
import arrowRight from '../../assets/integrations/arrow-right.svg';
import image47 from '../../assets/integrations/image 47.png';
import image48 from '../../assets/integrations/image 48.png';
import image49 from '../../assets/integrations/image 49.png';
import image50 from '../../assets/integrations/image 50.png';
import image51 from '../../assets/integrations/image 51.png';
import image52 from '../../assets/integrations/image 52.png';
import image53 from '../../assets/integrations/image 53.png';
import image54 from '../../assets/integrations/image 54.png';


const Integrations = () => {
  const sectionRef = useRef(null);
  const unlimitedRef = useRef(null);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 65 });

  useEffect(() => {
    if (unlimitedRef.current) {
      const rect = unlimitedRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const centerX = ((rect.left + rect.width / 2) / viewportWidth) * 100;
      const centerY = ((rect.top + rect.height / 2) / viewportHeight) * 100;
      setTargetPos({ x: centerX, y: centerY });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Hooks always at top level - never inside callbacks
  const filterValue = useTransform(smoothProgress, [0.7, 1], [
    'grayscale(0) sepia(0) hue-rotate(0deg) saturate(1)',
    'grayscale(0) sepia(1) hue-rotate(180deg) saturate(5)',
  ]);

  const blueIconOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);
  const blueIconScale = useTransform(smoothProgress, [0.8, 1], [0.5, 1]);

  const iconsData = [
    { id: 1, src: frame23, startX: 20, startY: 30, offsetX: -80, offsetY: -60 },
    { id: 2, src: image47, startX: 60, startY: 40, offsetX: 60, offsetY: -50 },
    { id: 3, src: image48, startX: 70, startY: 25, offsetX: 100, offsetY: 20 },
    { id: 4, src: image49, startX: 30, startY: 45, offsetX: -40, offsetY: 70 },
    { id: 5, src: image50, startX: 50, startY: 15, offsetX: 20, offsetY: -100 },
    { id: 6, src: image51, startX: 40, startY: 55, offsetX: -70, offsetY: 40 },
    { id: 7, src: image52, startX: 75, startY: 60, offsetX: 50, offsetY: 80 },
    { id: 8, src: image53, startX: 45, startY: 70, offsetX: -30, offsetY: 110 },
    { id: 9, src: image54, startX: 80, startY: 35, offsetX: 90, offsetY: -20 },
    { id: 10, src: frame25, startX: 25, startY: 50, offsetX: -20, offsetY: -80 },
  ];

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-[#eff3ff]">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      
      {iconsData.map((icon) => {
        // For each icon, create transforms at component level
        const leftValue = useTransform(smoothProgress, [0, 1], [
          `${icon.startX}%`,
          `calc(${targetPos.x}% + ${icon.offsetX}px)`,
        ]);

        const topValue = useTransform(smoothProgress, [0, 1], [
          `${icon.startY}%`,
          `calc(${targetPos.y}% + ${icon.offsetY}px)`,
        ]);

        return (
          <motion.img
            key={icon.id}
            src={icon.src}
            alt=""
            className="absolute w-12 h-12 md:w-16 md:h-16 object-contain pointer-events-none"
            style={{
              left: leftValue,
              top: topValue,
              transform: 'translate(-50%, -50%)',
              filter: filterValue,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: icon.id * 0.05 }}
          />
        );
      })}

     
      <motion.div
        className="absolute z-10"
        style={{
          left: `${targetPos.x}%`,
          top: `${targetPos.y}%`,
          x: '-50%',
          y: '-50%',
          opacity: blueIconOpacity,
          scale: blueIconScale,
        }}
      >
        <div className="relative w-[101px] h-[101px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0145F2] to-[#0034B8] rounded-[12px] shadow-[-22px_23px_23.3px_rgba(1,41,105,0.04)]" />
          <img src={mainIcon} alt="Main Icon" className="absolute inset-0 w-full h-full p-2" />
        </div>
      </motion.div>

      
      <div
        className="absolute left-1/2 transform -translate-x-1/2 text-center z-20 w-4/5 max-w-[800px]"
        style={{ top: '65%' }}
      >
        <h2 className={`${styles.firstHeading} mb-8`}>
          One platform, <span ref={unlimitedRef} className="relative">unlimited</span> integrations
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#0145F2] text-white px-6 py-4 rounded-lg hover:bg-[#0037c8] transition-colors duration-200 inline-flex items-center relative overflow-hidden group"
        >
          <span className="mr-8 text-lg">View all integrations</span>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <img src={arrowRight} alt="arrow" className="w-4 h-4" />
          </div>
        </motion.button>
      </div>

      {/* scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-10 border-2 border-[#08144F] rounded-full"
        style={{ opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.div
          className="w-1 h-2 bg-[#08144F] rounded-full mx-auto mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Integrations;