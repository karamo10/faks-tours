type YouTubeEmbedProps = {
  videoId: string;
  autoplay?: boolean;
  className?: string;
};

export default function YouTubeEmbed({
  videoId,
  autoplay = false,
  className = '',
}: YouTubeEmbedProps) {
  const params = new URLSearchParams({
    mute: '1',
    autoplay: autoplay ? '1' : '0',
    rel: '0',
    modestbranding: '1',
  });

  return (
    <div className={`rounded-xl overflow-hidden ${className} relative w-full aspect-video`}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
