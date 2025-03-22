import ProvAccDetForm from "./provider-acc-det-form";
import Exp from "./exp";
import { UserType } from "@/types/userType";

import UserAccDetForm from "./user-acc-det-form";
import { Loader2Icon } from "lucide-react";

export default function AccDet({ user }: { user: UserType }) {
  if (!user) {
    return (
      <div className="h-[100px] w-full flex justify-center items-center">
        <Loader2Icon className="animate-spin !mr-2" /> Loading..
      </div>
    );
  }

  return (
    <div>
      {user?.role == "provider" && <ProvAccDetForm user={user} />}
      {user?.role == "user" && <UserAccDetForm user={user} />}
      {user?.role == "provider" ? <Exp /> : ""}
    </div>
  );
}
