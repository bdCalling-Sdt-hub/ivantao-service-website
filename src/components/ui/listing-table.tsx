import ViewModal from "./view-modal";
import DeletePopover from "./delete-popover";
import { ReportType } from "@/types/others";

export default function ListingTable({ data }: { data: ReportType[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] w-full space-y-4">
        <Col />
        {data.map((item, i) => (
          <Data
            image={item.provider.image}
            key={i}
            id={item.service_id}
            pvName={item.provider.full_name}
            service={item.reported_service.title}
            category={item.reported_service.service_type}
            date={item.updated_at.split("T")[0]}
            reason={item.reason}
            description={item.description}
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
  image,
  id,
  service,
  pvName,
  category,
  date,
  reason,
  description,
}: {
  image: string;
  id: string;
  service: string;
  pvName: string;
  category: string;
  date: string;
  reason: string;
  description: string;
}) {
  return (
    <div className="flex items-center py-3 text-xs sm:text-sm md:text-base rounded-lg divide-x divide-gray-300 bg-[#F0E8FF]">
      <div className="w-3/12 flex justify-center items-center gap-3">
        <div
          className="size-6 md:size-8 bg-gray-300 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="truncate">{pvName}</div>
      </div>
      <div className="w-3/12 text-center font-semibold truncate">{service}</div>
      <div className="w-2/12 text-center font-semibold truncate">
        {category}
      </div>
      <div className="w-2/12 text-center truncate">{date}</div>
      <div className="w-2/12 flex justify-center items-center gap-2">
        <ViewModal
          image={image}
          provider={pvName}
          name={service}
          category={category}
          date={date}
          reason={reason}
          description={description}
        />
        {id ? (
          <DeletePopover
            id={id}
            type="reportListing"
            messaged={"Are you sure you want to delete this service?"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
