const Policy = () => {
  const policies = [
    {
      id: 1,
      icon: "https://img.icons8.com/material-outlined/30/exchange.png",
      title: "Easy Exchange",
      description: "Hassle-free exchanges on all items.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/material-outlined/30/return.png",
      title: "30-Day Returns",
      description: "Full refunds within 30 days.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/material-outlined/30/help.png",
      title: "24/7 Support",
      description: "Dedicated support anytime.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="flex justify-center gap-60 text-center">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="flex flex-col items-center gap-2 text-gray-800"
          >
            <img
              src={policy.icon}
              alt={policy.title}
              className="w-8 h-8 object-contain text-gray-700"
            />
            <h3 className="text-gray-800 text-xs font-medium">
              {policy.title}
            </h3>
            <p className="text-gray-600 text-xs leading-tight font-light">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
