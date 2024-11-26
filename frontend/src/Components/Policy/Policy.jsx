const Policy = () => {
    const policies = [
      {
        id: 1,
        icon: "https://img.icons8.com/material-outlined/48/exchange.png", // Simple exchange icon
        title: "Easy Exchange",
        description: "Hassle-free exchanges on all items.",
      },
      {
        id: 2,
        icon: "https://img.icons8.com/material-outlined/48/return.png", // 30-day return icon
        title: "30-Day Returns",
        description: "Full refunds within 30 days.",
      },
      {
        id: 3,
        icon: "https://img.icons8.com/material-outlined/48/help.png", // Support icon
        title: "24/7 Support",
        description: "Dedicated support anytime.",
      },
    ];
  
    return (
      <div className="w-11/12 mx-auto py-6">
        <h4 className="text-center text-gray-800 text-3xl font-semibold tracking-wide mb-6">
          Why Choose Us?
        </h4>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="flex flex-col items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-60 md:w-52 sm:w-full"
            >
              <img
                src={policy.icon}
                alt={policy.title}
                className="w-10 h-10 object-contain text-gray-700"
              />
              <h3 className="text-gray-800 text-lg font-medium">{policy.title}</h3>
              <p className="text-gray-600 text-sm leading-tight">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Policy;
  