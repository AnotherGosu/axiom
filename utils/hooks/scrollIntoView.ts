export default function ScrollIntoView({
  ref,
  offset = 150,
}: {
  ref: React.MutableRefObject<any>;
  offset?: number;
}) {
  if (ref?.current) {
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
