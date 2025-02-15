import ViewModal from "./view-modal";
import DeletePopover from "./delete-popover";

export interface ListingItem {
  pvName?: string;
  service?: string;
  category?: string;
  date?: string;
}

export default function ListingTable({ data }: { data: ListingItem[] }) {
  return (
    <div className="w-full space-y-4">
      <Col />
      {data.map((item, i) => (
        <Data
          key={i}
          pvName={item.pvName}
          service={item.service}
          category={item.category}
          date={item.date}
        />
      ))}
    </div>
  );
}

function Col() {
  return (
    <div className="flex flex-row justify-start items-center py-2 text-base font-semibold sticky top-0 bg-[#FBF9F5]">
      <div className="w-3/12 flex justify-center items-center">
        Provider name
      </div>
      <div className="w-3/12 flex justify-center items-center">Service</div>
      <div className="w-2/12 flex justify-center items-center">Categories</div>
      <div className="w-2/12 flex justify-center items-center">Date</div>
      <div className="w-2/12 flex justify-center items-center">Action</div>
    </div>
  );
}

function Data({
  service,
  pvName,
  category,
  date,
}: {
  service?: string;
  pvName?: string;
  category?: string;
  date?: string;
}) {
  return (
    <div className="w-full flex flex-row justify-start items-center py-4 text-base gap-4 bg-background rounded-lg divide-x divide-black">
      <div className="w-3/12 flex justify-center items-center gap-4">
        <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
        <div className="text-lg font-semibold">{pvName}</div>
      </div>
      <div className="w-3/12 flex justify-center items-center font-semibold">
        <p>{service}</p>
      </div>
      <div className="w-2/12 flex justify-center items-center font-semibold">
        {category}
      </div>
      <div className="w-2/12 flex justify-center items-center">{date}</div>
      <div className="w-2/12 flex justify-center items-center gap-2 text-sm">
        <ViewModal />
        <DeletePopover message={"Are you sure delete this service?"} />
      </div>
    </div>
  );
}
