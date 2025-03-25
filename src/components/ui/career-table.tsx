import Link from "next/link";
import DeletePopover from "./delete-popover";
import EditCareer from "./editCareer";
import { AdminJob } from "@/types/others";

export default function CareerTable({ data }: { data: AdminJob[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] w-full space-y-4">
        <Col />
        {data.map((item, i) => (
          <Data link={`careers/${item.id}`} key={i} {...item} />
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

function Data({
  job_role,
  job_category,
  created_at,
  deadline,
  applied_users_count,
  link,
}: AdminJob & { link: string }) {
  return (
    <div className="flex items-center py-3 text-xs sm:text-sm md:text-base gap-4 bg-background rounded-lg divide-x divide-gray-300">
      <div className="w-2/12 flex justify-center items-center font-semibold">
        <div className="md:text-lg font-bold text-[#7849D4]">{job_role}</div>
      </div>
      <div className="w-2/12 flex justify-center items-center gap-4">
        {job_category}
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center font-semibold">
        <p>{created_at.split("T")[0]}</p>
      </div>
      <div className="w-2/12 flex justify-center items-center font-semibold">
        {deadline}
      </div>
      <div className="w-2/12 flex justify-center items-center">
        ({applied_users_count})
        <Link href={link} className="underline pl-2 text-[#7849D4]">
          See Applicants
        </Link>
      </div>
      <div className="w-2/12 flex justify-center items-center gap-1 text-sm">
        <EditCareer />
        <DeletePopover
          messaged={`Are you sure delete this circular?`}
          type={""}
          id={""}
        />
      </div>
    </div>
  );
}
