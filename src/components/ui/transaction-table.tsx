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
    <div className="w-full space-y-4">
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
  );
}

function Col() {
  return (
    <div className="flex flex-row justify-start items-center py-4 text-base font-semibold sticky top-0 bg-[#FBF9F5]">
      <div className="w-1/12 flex justify-center items-center">Sr. no</div>
      <div className="w-3/12 flex justify-center items-center">Service</div>
      <div className="w-2/12 flex justify-center items-center">
        Sell details
      </div>
      <div className="w-3/12 flex justify-center items-center">Price</div>
      <div className="w-3/12 flex justify-center items-center">
        Your Percentage
      </div>
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
    <div className="w-full flex flex-row justify-start items-center py-4 text-base gap-4 bg-background rounded-lg">
      <div className="w-1/12 flex justify-center items-center font-semibold">
        {sr}.
      </div>
      <div className="w-3/12 flex justify-start items-center gap-4">
        <div className="h-12 w-12 bg-gray-300 rounded-lg"></div>
        <div className="text-lg font-bold text-orange-500">{service}</div>
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center font-semibold">
        <p>Provider Name: {pvName}</p>
        <p>Customer Name: {csName}</p>
      </div>
      <div className="w-3/12 flex justify-center items-center font-semibold">
        ${price}
      </div>
      <div className="w-3/12 flex justify-center items-center gap-1 text-sm">
        <span className="text-xl text-orange-500 font-semibold">
          +{percentage}%
        </span>
        ($
        {percAmm?.toFixed(1)})
      </div>
    </div>
  );
}
