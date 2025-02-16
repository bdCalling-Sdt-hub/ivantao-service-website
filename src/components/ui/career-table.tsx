import Link from "next/link";
import DeletePopover from "./delete-popover";
import EditCareer from "./editCareer";

export interface ListingItem {
  title?: string;
  category?: string;
  start?: string;
  end?: string;
  applicants?: number;
  link: string;
}

export default function CareerTable({ data }: { data: ListingItem[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] w-full space-y-4">
        <Col />
        {data.map((item, i) => (
          <Data key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

function Col() {
  return (
    <div className="flex items-center py-4 text-xs sm:text-sm md:text-base font-semibold sticky top-0 bg-[#FBF9F5]">
      <div className="w-2/12 text-center">Job role</div>
      <div className="w-2/12 text-center">Category</div>
      <div className="w-2/12 text-center">Date Posted</div>
      <div className="w-2/12 text-center">Deadline</div>
      <div className="w-2/12 text-center">Applied</div>
      <div className="w-2/12 text-center">Action</div>
    </div>
  );
}

function Data({ title, category, start, end, applicants, link }: ListingItem) {
  return (
    <div className="flex items-center py-3 text-xs sm:text-sm md:text-base gap-4 bg-background rounded-lg divide-x divide-gray-300">
      <div className="w-2/12 flex justify-center items-center font-semibold">
        <div className="md:text-lg font-bold text-orange-500">{title}</div>
      </div>
      <div className="w-2/12 flex justify-center items-center gap-4">
        {category}
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center font-semibold">
        <p>{start}</p>
      </div>
      <div className="w-2/12 flex justify-center items-center font-semibold">
        {end}
      </div>
      <div className="w-2/12 flex justify-center items-center">
        ({applicants})
        <Link href={link} className="underline pl-2 text-orange-400">
          See Applicants
        </Link>
      </div>
      <div className="w-2/12 flex justify-center items-center gap-1 text-sm">
        <EditCareer />
        <DeletePopover message={`Are you sure delete this circular?`} />
      </div>
    </div>
  );
}
