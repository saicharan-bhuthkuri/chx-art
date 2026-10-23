import { useState, useEffect } from 'react';
import heroSurrealScene from '../assets/images/hero-surreal-scene.jpg';
import aboutCharanCollage from '../assets/images/about-charan-portrait.jpg';
import aboutStudio from '../assets/images/about-studio.jpg';
import contactGalleryBanner from '../assets/images/contact-gallery-banner.jpg';
import logoChxMark from '../assets/images/logo-chx-mark.png';
import { featuredArtworks, processSteps } from '../data/portfolioData';

interface PreloaderState {
  isReady: boolean;
  progress: number;
  statusText: string;
}

export const useAssetPreloader = (): PreloaderState => {
  const [progress, setProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>('Initializing styles & typography...');

  useEffect(() => {
    let isMounted = true;

    // Remaining gallery and section images to preload
    const secondaryImages: string[] = [
      aboutCharanCollage,
      aboutStudio,
      contactGalleryBanner,
      logoChxMark,
      ...featuredArtworks.map((item) => item.image),
      ...processSteps.map((item) => item.image)
    ];

    const uniqueSecondary = Array.from(new Set(secondaryImages));
    const totalAssets = uniqueSecondary.length + 3; // +1 Hero image, +1 CSS Stylesheets, +1 Web Fonts
    let completedAssets = 0;

    const updateProgress = (label: string) => {
      if (!isMounted) return;
      completedAssets += 1;
      const currentPct = Math.min(100, Math.round((completedAssets / totalAssets) * 100));
      setProgress(currentPct);
      setStatusText(label);
    };

    const loadAllAssets = async () => {
      // 1. Wait for CSS Stylesheets to be ready
      try {
        if (document.readyState === 'loading') {
          await new Promise<void>((resolve) => {
            document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
          });
        }
        updateProgress('Stylesheets applied');
      } catch {
        updateProgress('Stylesheets applied');
      }

      // 2. Wait for Google Fonts & typography
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
        updateProgress('Typography loaded');
      } catch {
        updateProgress('Typography loaded');
      }

      // 3. Priority #1: Load & decode Master Hero Painting completely first
      await new Promise<void>((resolve) => {
        const heroImg = new Image();
        heroImg.src = heroSurrealScene;
        const onHeroDone = () => {
          updateProgress('Master artwork ready');
          resolve();
        };

        if (heroImg.complete) {
          if (typeof heroImg.decode === 'function') {
            heroImg.decode().then(onHeroDone).catch(onHeroDone);
          } else {
            onHeroDone();
          }
        } else {
          heroImg.onload = () => {
            if (typeof heroImg.decode === 'function') {
              heroImg.decode().then(onHeroDone).catch(onHeroDone);
            } else {
              onHeroDone();
            }
          };
          heroImg.onerror = onHeroDone;
        }
      });

      // 4. Preload and decode remaining visual gallery assets
      const secondaryPromises = uniqueSecondary.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;

          const finish = () => {
            updateProgress('Loading visual assets...');
            resolve();
          };

          if (img.complete) {
            if (typeof img.decode === 'function') {
              img.decode().then(finish).catch(finish);
            } else {
              finish();
            }
          } else {
            img.onload = () => {
              if (typeof img.decode === 'function') {
                img.decode().then(finish).catch(finish);
              } else {
                finish();
              }
            };
            img.onerror = () => {
              finish();
            };
          }
        });
      });

      await Promise.all(secondaryPromises);

      // Smooth completion transition
      if (isMounted) {
        setProgress(100);
        setStatusText('Visual archives ready');
        setTimeout(() => {
          if (isMounted) {
            setIsReady(true);
          }
        }, 300);
      }
    };

    // Safety fallback timeout
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setIsReady((prev) => {
          if (!prev) {
            setProgress(100);
            return true;
          }
          return prev;
        });
      }
    }, 6000);

    loadAllAssets();

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  return { isReady, progress, statusText };
};
