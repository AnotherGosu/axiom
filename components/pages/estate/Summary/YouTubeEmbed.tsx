import { Box } from "@chakra-ui/react";

interface Props {
  videoUrl: string;
}

export default function YouTubeEmbed({ videoUrl }: Props) {
  const videoId = videoUrl.split("/").pop();
  return (
    <Box
      as="iframe"
      width="100%"
      height={["200px", "350px", "500px"]}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
