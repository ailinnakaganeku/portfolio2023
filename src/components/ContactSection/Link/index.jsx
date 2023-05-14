const Link = ({ hrefLink, link }) => {
  return (
    <a
      href={hrefLink}
      className="text-blue-600 dark:text-[#00e1fe]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  );
};

export default Link;
