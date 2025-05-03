interface YouTubePlayerProps {
  videoId: string
  title?: string
}

export function YouTubePlayer({ videoId, title = "YouTube video player" }: YouTubePlayerProps) {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
