/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserType } from "@/types/userType";
import DeletePopover from "./delete-popover";
import ViewUser from "./view-user";

export default function UPTable({
  data,
  provider,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: UserType[];
  provider?: boolean;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] w-full space-y-4">
        <Col provider={provider} />
        {data.map((item, i) => (
          <Data
            key={i}
            img={item.image}
            sr={parseInt(item.id)}
            name={item.full_name}
            email={item.email}
            id={item.id}
            address={item.address}
            contact={item.contact ? item.contact : ""}
            provider={provider}
          />
        ))}
      </div>
    </div>
  );
}

function Col({ provider }: { provider?: boolean }) {
  return (
    <div className="flex items-center py-4 text-xs sm:text-sm md:text-base font-semibold sticky top-0">
      <div className="w-1/12 text-center">Sr. No</div>
      <div className="w-3/12 text-center">User Name</div>
      <div className="w-2/12 text-center">Email</div>
      <div className="w-3/12 text-center">{provider ? "Provider" : "User"}</div>
      <div className="w-3/12 text-center">Action</div>
    </div>
  );
}

function Data({
  sr,
  img,
  name,
  email,
  id,
  address,
  contact,
  provider,
}: {
  sr?: number;
  name?: string;
  img?: string;
  email: string;
  id?: string;
  address?: string;
  contact?: string;
  provider?: boolean;
}) {
  return (
    <div className="flex items-center py-3 text-xs sm:text-sm md:text-base gap-4 rounded-lg divide-x divide-gray-300 bg-[#F0E8FF]">
      <div className="w-1/12 flex justify-center items-center font-semibold">
        {sr}.
      </div>
      <div className="w-3/12 flex justify-start items-center gap-4">
        <div
          className="h-12 w-12 bg-gray-300 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="md:text-lg font-bold">{name}</div>
      </div>
      <div className="w-2/12 flex justify-center items-center font-semibold">
        {email}
      </div>
      <div className="w-3/12 flex justify-center items-center font-semibold">
        {provider ? (
          <div className="text-sm py-1 px-4 text-background hover:bg-blue-300 bg-blue-500 rounded-full cursor-pointer transition-colors">
            Message
          </div>
        ) : (
          id
        )}
      </div>
      <div className="w-3/12 flex justify-center items-center gap-1 text-sm">
        <ViewUser
          img={img}
          id={id}
          name={name}
          email={email}
          address={address}
          contact={contact}
        />
        {id ? (
          <DeletePopover
            id={id}
            type={provider ? "provider" : "user"}
            messaged={`Are you sure you want to delete this ${
              provider ? "Provider" : "User"
            }`}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
