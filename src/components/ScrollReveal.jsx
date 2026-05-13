import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      const scroller =
        scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true,
          },
        },
      );

      const wordElements = el.querySelectorAll('.word');

      gsap.set(wordElements, {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
        yPercent: 18,
        willChange: 'opacity, filter, transform',
      });

      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=8%',
          end: wordAnimationEnd,
          scrub: 1.2,
        },
      });

      revealTimeline.to(wordElements, {
        opacity: 1,
        yPercent: 0,
        ease: 'power2.out',
        stagger: {
          each: 0.08,
          from: 'start',
        },
      });

      if (enableBlur) {
        revealTimeline.to(
          wordElements,
          {
            filter: 'blur(0px)',
            ease: 'power2.out',
            stagger: {
              each: 0.08,
              from: 'start',
            },
          },
          0,
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;

// Made with Bob
