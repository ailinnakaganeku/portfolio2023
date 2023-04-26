const Link = ({ hrefLink, link }) => {
  return (
    <a
      href={hrefLink}
      className="text-[#00e1fe]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  );
};

export default Link;
