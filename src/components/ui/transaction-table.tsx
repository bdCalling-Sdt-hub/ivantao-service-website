export interface ListingItem {
  sr?: number;
  service?: string;
  pvName?: string;
  csName?: string;
  price?: number;
  percentage?: number;
  percAmm?: number;
}

export default function TransactionTable({ data }: { data: ListingItem[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] w-full space-y-4">
        <Col />
        {data.map((item, i) => (
          <Data
            key={i}
            sr={item.sr}
            service={item.service}
            pvName={item.pvName}
            csName={item.csName}
            price={item.price}
            percentage={item.percentage}
            percAmm={item.percAmm}
          />
        ))}
      </div>
    </div>
  );
}

function Col() {
  return (
    <div className="flex items-center py-4 text-xs sm:text-sm md:text-base font-semibold sticky top-0">
      <div className="w-1/12 text-center">Sr. No</div>
      <div className="w-3/12 text-center">Service</div>
      <div className="w-2/12 text-center">Sell Details</div>
      <div className="w-3/12 text-center">Price</div>
      <div className="w-3/12 text-center">Your Percentage</div>
    </div>
  );
}

function Data({
  sr,
  service,
  pvName,
  csName,
  price,
  percentage,
  percAmm,
}: {
  sr?: number;
  service?: string;
  pvName?: string;
  csName?: string;
  price?: number;
  percentage?: number;
  percAmm?: number;
}) {
  return (
    <div className="flex items-center py-3 text-xs sm:text-sm md:text-base gap-4 bg-[#F0E8FF] rounded-lg divide-x divide-gray-300">
      <div className="w-1/12 flex justify-center items-center font-semibold">
        {sr}.
      </div>
      <div className="w-3/12 flex justify-start items-center gap-4">
        <div className="h-12 w-12 bg-gray-300 rounded-lg"></div>
        <div className="md:text-lg font-bold text-[#7849D4]">{service}</div>
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center font-semibold">
        <p className="text-xs sm:text-sm">{`Provider: ${pvName}`}</p>
        <p className="text-xs sm:text-sm">{`Customer: ${csName}`}</p>
      </div>
      <div className="w-3/12 flex justify-center items-center font-semibold">
        ${price}
      </div>
      <div className="w-3/12 flex justify-center items-center gap-1 text-sm">
        <span className="text-xl text-[#7849D4] font-semibold">
          +{percentage}%
        </span>
        (${percAmm?.toFixed(1)})
      </div>
    </div>
  );
}
