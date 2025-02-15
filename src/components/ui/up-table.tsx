/* eslint-disable @typescript-eslint/no-unused-vars */
import DeletePopover from "./delete-popover";
import ViewUser from "./view-user";

export interface ListingItem {
  sr?: number;
  name?: string;
  email: string;
  id?: string;
  address?: string;
  brought?: string;
  contact?: string;
}

export default function UPTable({
  data,
  provider,
}: {
  data: ListingItem[];
  provider?: boolean;
}) {
  return (
    <div className="w-full space-y-4">
      <Col provider={provider} />
      {data.map((item, i) => (
        <Data
          key={i}
          sr={item.sr}
          name={item.name}
          email={item.email}
          id={item.id}
          address={item.address}
          brought={item.brought}
          contact={item.contact}
          provider={provider}
        />
      ))}
    </div>
  );
}

function Col({ provider }: { provider?: boolean }) {
  return (
    <div className="flex flex-row justify-start items-center py-4 text-base font-semibold sticky top-0 bg-[#FBF9F5]">
      <div className="w-1/12 flex justify-center items-center">Sr. no</div>
      <div className="w-3/12 flex justify-center items-center">User name</div>
      <div className="w-2/12 flex justify-center items-center">Email</div>
      <div className="w-3/12 flex justify-center items-center">
        {provider ? "Provider" : "User"}
      </div>
      <div className="w-3/12 flex justify-center items-center">Action</div>
    </div>
  );
}

function Data({
  sr,
  name,
  email,
  id,
  address,
  brought,
  contact,
  provider,
}: {
  sr?: number;
  name?: string;
  email: string;
  id?: string;
  address?: string;
  brought?: string;
  contact?: string;
  provider?: boolean;
}) {
  return (
    <div className="w-full flex flex-row justify-start items-center py-4 text-base gap-4 bg-background rounded-lg">
      <div className="w-1/12 flex justify-center items-center font-semibold">
        {sr}.
      </div>
      <div className="w-3/12 flex justify-start items-center gap-4">
        <div className="h-12 w-12 bg-gray-300 rounded-lg"></div>
        <div className="text-lg font-bold">{name}</div>
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center font-semibold">
        {email}
      </div>
      <div className="w-3/12 flex justify-center items-center font-semibold">
        {provider ? (
          <div className="text-sm py-1 px-4 text-background hover:!bg-blue-300 bg-blue-500 rounded-full cursor-pointer transition-colors">
            Message
          </div>
        ) : (
          id
        )}
      </div>
      <div className="w-3/12 flex justify-center items-center gap-1 text-sm">
        <ViewUser />
        <DeletePopover
          message={`Are you sure delete this ${provider ? "Provider" : "User"}`}
        />
      </div>
    </div>
  );
}
