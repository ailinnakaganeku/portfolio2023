import Link from "../Link";

const ContactCard = (contact) => {
  const { icon, label, hrefLink, link } = contact;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
      <div className="flex items-center mb-4">
        {icon}
        <span className="text-gray-700 dark:text-white font-medium">
          {label}
        </span>
      </div>
      <Link hrefLink={hrefLink} link={link} />
    </div>
  );
};

export default ContactCard;
