import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import { Button } from "@/components/ui/button";

async function userManagement() {
  const getListOfUsers = await fetchUserAction();
  console.log(getListOfUsers);

  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <Button>User Management</Button>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-3sm:grid-cols-2 md:grid-cols-3 gap-10">
        {getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0
          ? getListOfUsers.data.map((userItems) => <SingleUserCard user = {userItems}/>)
          : <h3>No users found! Please create one</h3>}
      </div>
    </div>
  );
}

export default userManagement;
