import AddNewUser from "@/components/add-new-user";
import { Button } from "@/components/ui/button";

function userManagement() {
    return (
        <div className="p-20 max-w-6xl">
            <div className="flex justify-between">
                <Button>User Management</Button>
                <AddNewUser />
            </div>
        </div>
    )
}

export default userManagement;