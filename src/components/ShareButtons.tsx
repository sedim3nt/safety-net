"use client";

export function ShareButtons({
  text,
  url = "https://safetynet.spirittree.dev",
  subject = "Check out The Safety Net",
}: {
  text: string;
  url?: string;
  subject?: string;
}) {
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);
  const encodedSubject = encodeURIComponent(subject);

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
      >
        𝕏 Post
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={`mailto:?subject=${encodedSubject}&body=${encodedText}%0A%0A${encodedUrl}`}
        className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
      >
        ✉️ Email
      </a>
    </div>
  );
}
