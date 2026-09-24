
"use client";

import { useState } from "react";
import {
  Youtube,
  Play,
  Trophy,
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CHANNEL_URL =
  "https://www.youtube.com/@Engineermohammedkhan";

const videos = [
  {
    id: 1,
    title: "My Achievement Journey",
    category: "Achievement",
    videoId: "_jgQZUSOE2Q",
  },
  {
    id: 2,
    title: "Professional Milestones",
    category: "Career",
    videoId: "SceBFyXpFzg",
  },
  {
    id: 3,
    title: "My Software Projects",
    category: "Projects",
    videoId: "xbcLMCgXJJ8",
  },
  {
    id: 4,
    title: "Technology & Innovation",
    category: "Technology",
    videoId: "lsPEJ6HP4ZA",
  },
  {
    id: 5,
    title: "Teaching & Education",
    category: "Education",
    videoId: "o2oVdqkXMfQ",
  },
  {
    id: 6,
    title: "My Success Story",
    category: "Milestones",
    videoId: "97emvgJD3-M",
  },
  {
    id: 7,
    title: "My Success Story",
    category: "Milestones",
    videoId: "Dy-hMDIuiBY",
  },
  {
    id: 8,
    title: "My Success Story",
    category: "Milestones",
    videoId: "_WqYoIeIhn4",
  },
  {
    id: 9,
    title: "My Success Story",
    category: "Milestones",
    videoId: "USy5c9MQx58",
  },
];

function VideoCard({
  video,
  index,
  activeIndex,
  onPlay,
}) {
  const isPlaying = activeIndex === index;

  const validId = /^[a-zA-Z0-9_-]{11}$/.test(
    video.videoId
  );

  return (
    <article
      className={`
        group overflow-hidden rounded-3xl
        border bg-[#101d30]
        transition-all duration-300
        hover:-translate-y-1
        ${
          isPlaying
            ? "border-cyan-400 shadow-xl shadow-cyan-500/15"
            : "border-white/10 hover:border-cyan-400/40"
        }
      `}
    >
      {/* Video player */}
      <div className="relative aspect-[9/16] overflow-hidden bg-[#071426]">
        {validId && isPlaying ? (
          <iframe
            key={video.videoId}
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&playsinline=1&rel=0`}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : validId ? (
          <button
            type="button"
            onClick={() => onPlay(index)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 flex h-full w-full items-center justify-center"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={`${video.title} thumbnail`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-500/30 transition-transform group-hover:scale-110">
              <Play
                size={28}
                fill="currentColor"
                className="ml-1"
              />
            </span>
          </button>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-slate-400">
            <Youtube size={42} />
            <p>Video unavailable</p>
          </div>
        )}

        {/* Category */}
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {video.category}
        </span>

        {/* Playing indicator */}
        {isPlaying && (
          <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-cyan-400 px-3 py-1.5 text-[10px] font-bold uppercase text-slate-950">
            Now Playing
          </span>
        )}
      </div>

      {/* Video details */}
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Video {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="min-h-12 text-base font-bold leading-6 text-white">
          {video.title}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-4">
          <a
            href={`https://www.youtube.com/shorts/${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Watch on YouTube
            <ArrowUpRight size={15} />
          </a>

          {!isPlaying && validId && (
            <button
              type="button"
              onClick={() => onPlay(index)}
              className="rounded-lg bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
            >
              Play
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Achievements() {
  // Shared state ensures only one iframe exists.
  const [activeIndex, setActiveIndex] =
    useState(null);

  const playVideo = (index) => {
    setActiveIndex(index);
  };

  const playNext = () => {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current + 1) % videos.length
    );
  };

  const playPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? videos.length - 1
        : (current - 1 + videos.length) %
          videos.length
    );
  };

  const stopVideo = () => {
    setActiveIndex(null);
  };

  return (
    <section
      id="achievements"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#050b18] px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5">
            <Trophy
              size={16}
              className="text-cyan-400"
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Achievements & Milestones
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            My Journey{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              in Motion
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore my achievements, professional
            milestones, software projects and
            memorable moments.
          </p>
        </div>

        {/* Playback controls */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-cyan-400/15 bg-[#101d30] p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Video Showcase
            </p>

            <p className="mt-1 text-sm text-slate-300">
              {activeIndex === null
                ? "Select a video to start watching"
                : `Now playing ${activeIndex + 1} of ${videos.length}`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={playPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40 hover:text-cyan-400"
              aria-label="Previous video"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={playNext}
              className="flex h-11 items-center gap-2 rounded-xl bg-cyan-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next Video
              <ChevronRight size={19} />
            </button>

            {activeIndex !== null && (
              <button
                type="button"
                onClick={stopVideo}
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-red-400/40 hover:text-red-400"
              >
                Stop
              </button>
            )}
          </div>
        </div>

        {/* Nine video cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              activeIndex={activeIndex}
              onPlay={playVideo}
            />
          ))}
        </div>

        {/* YouTube channel banner */}
        <div className="relative mt-20 overflow-hidden rounded-[30px] border border-cyan-400/15 bg-gradient-to-br from-[#102238] via-[#0c1a2e] to-[#10152b] p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10 text-red-400">
                <Youtube size={29} />
              </div>

              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Follow My YouTube Journey
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                Explore more technology content,
                achievements and professional
                milestones on Engineer Mohammed Khan.
              </p>
            </div>

            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500"
            >
              <Youtube size={21} />
              Visit My Channel
              <ExternalLink size={17} />
            </a>
          </div>
        </div>

        {/* Closing */}
        <p className="mt-14 text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          Documenting the Journey · Sharing the Growth
        </p>
      </div>
    </section>
  );
}