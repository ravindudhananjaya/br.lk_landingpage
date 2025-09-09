import React from "react";

// Cache dominant colors by image URL to avoid recomputation
const __logoColorCache = new Map();

const useDominantColor = (src, fallback = '#f3ede6') => {
  const [color, setColor] = React.useState(() => __logoColorCache.get(src) || fallback);

  React.useEffect(() => {
    if (!src) return;
    if (__logoColorCache.has(src)) return; // already computed

    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.src = src;
    img.onload = () => {
      try {
        const w = 24, h = 24;
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, w, h);
        const { data } = ctx.getImageData(0, 0, w, h);
        let r = 0, g = 0, b = 0, c = 0;
        for (let i = 0; i < data.length; i += 4) {
          const a = data[i + 3];
          if (a < 125) continue; // skip transparent
          r += data[i]; g += data[i + 1]; b += data[i + 2]; c++;
        }
        if (c > 0) {
          const rr = Math.round(r / c), gg = Math.round(g / c), bb = Math.round(b / c);
          const col = `rgb(${rr}, ${gg}, ${bb})`;
          __logoColorCache.set(src, col);
          if (!cancelled) setColor(col);
        }
      } catch {
        // Likely CORS/canvas issue; keep fallback
      }
    };
    img.onerror = () => {};
    return () => { cancelled = true; };
  }, [src, fallback]);

  return color;
};

const LogoCard = ({ name, imgSrc, imgAlt }) => {
  const bg = useDominantColor(imgSrc);
  return (
    <div
      className="  shadow-sm min-w-[260px] sm:min-w-[300px] md:min-w-[340px] xl:min-w-[380px] 2xl:min-w-[420px] h-[100px] md:h-[110px] overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <img src={imgSrc} alt={imgAlt || name} className="w-full h-full object-contain select-none" draggable={false} />
    </div>
  );
};

const CarouselRow = ({ items, reverse = false, duration = 30 }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
  className={`flex items-center gap-4 md:gap-6 w-max ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}
  style={{ animationDuration: `${duration}s`, minWidth: '200%' }}
      >
  {[...items, ...items, ...items, ...items].map((it, idx) => (
          <LogoCard key={idx} name={it.name} imgSrc={it.img} />
        ))}
      </div>
    </div>
  );
};

const Partners = () => {
  const logoUrls = [
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d187ca18674201b54d7_13.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d1758b2d59adbdc79c1_2.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d180c02f884c8aac29b_12.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d17c131607171625655_10.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d177ee8cd948777fea9_7.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d17fb4b3c684c4a8557_1.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d17ed5de26a2b46ff40_9.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d1780a6432ed79791c7_8.png",
    "https://cdn.prod.website-files.com/6772e5a5c88b5b4c14275138/688f2d170d7d3716ecf43001_5.png",
  ]

  const items = logoUrls.map((url, i) => ({ name: `Partner ${i + 1}`, img: url }))
  const row1 = items.slice(0, 5)
  const row2 = items.slice(5)

  return (
    <section className="bg-white py-16 px-0">
      {/* local styles for marquee animation */}
      <style>{`
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left linear infinite; }
        .animate-scroll-right { animation: scroll-right linear infinite; }
      `}</style>
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#232323] mb-10 md:mb-12">
          Trusted by 100+ companies around the world
        </h2>
      </div>

      {/* Full-width carousels */}
  <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
        {/* Row 1 */}
        <CarouselRow items={row1} duration={32} />

        {/* Spacer */}
        <div className="h-6" />

        {/* Row 2 (reverse direction) */}
        <CarouselRow items={row2} reverse duration={30} />
      </div>
    </section>
  );
};

export default Partners;