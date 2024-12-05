const Policy = () => {
  const policies = [
    {
      id: 1,
      icon: "https://img.icons8.com/ios/50/4a90e2/swap.png",
      title: "Easy Exchange",
      description: "Hassle-free exchanges on all items.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/ios/50/4a90e2/return.png",
      title: "30-Day Returns",
      description: "Full refunds within 30 days.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/ios/50/4a90e2/customer-support.png",
      title: "24/7 Support",
      description: "Dedicated support anytime.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-8 bg-gray-50 shadow-md rounded-lg">
      <div className="flex justify-around text-center">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="flex flex-col items-center gap-3 text-gray-800"
          >
            <img
              src={policy.icon}
              alt={policy.title}
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-gray-800 text-sm font-semibold">
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
