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
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] w-full space-y-4">
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
    </div>
  );
}

function Col() {
  return (
    <div className="flex items-center py-2 text-xs sm:text-sm md:text-base font-semibold sticky top-0">
      <div className="w-3/12 text-center">Provider Name</div>
      <div className="w-3/12 text-center">Service</div>
      <div className="w-2/12 text-center">Categories</div>
      <div className="w-2/12 text-center">Date</div>
      <div className="w-2/12 text-center">Action</div>
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
    <div className="flex items-center py-3 text-xs sm:text-sm md:text-base rounded-lg divide-x divide-gray-300 bg-[#F0E8FF]">
      <div className="w-3/12 flex justify-center items-center gap-3">
        <div className="size-6 md:size-8 bg-gray-300 rounded-lg"></div>
        <div className="truncate">{pvName}</div>
      </div>
      <div className="w-3/12 text-center font-semibold truncate">{service}</div>
      <div className="w-2/12 text-center font-semibold truncate">
        {category}
      </div>
      <div className="w-2/12 text-center truncate">{date}</div>
      <div className="w-2/12 flex justify-center items-center gap-2">
        <ViewModal />
        <DeletePopover
          message={"Are you sure you want to delete this service?"}
        />
      </div>
    </div>
  );
}
