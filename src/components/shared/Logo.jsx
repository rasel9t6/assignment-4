export default function Logo({ className, src, alt }) {
  return (
    <a href='/'>
      <img
        className={className}
        src={src}
        alt={alt}
      />
    </a>
  );
}
