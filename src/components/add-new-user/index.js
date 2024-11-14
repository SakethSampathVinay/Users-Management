"use client";

import { Copy } from "lucide-react";
import { Button } from "../../../public/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { addNewUserControls, addNewUserFromInitialState } from "@/utils";
import AddNewUserAction from "@/actions";

const formControls = [];

function AddNewUser() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFromInitialState
  );

  console.log(addNewUserFormData);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result = AddNewUserAction(addNewUserFormData);
    console.log(result);
  }

  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>
      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false),
            setAddNewUserFormData(addNewUserFromInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserControls.map((controlItem) => (
              <div className="mb-2" key={controlItem.name}>
                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  type={controlItem.type}
                  value={addNewUserFormData[controlItem.name]}
                  onChange={() =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: event.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                type="submit"
                disabled={!handleSaveButtonValid}
                className="disabled:opacity-55"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
