"use client";

import * as React from "react";
import { Mail, SendHorizonal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface EmailType {
  value: string;
  label: string;
}

export function EmailButton() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const isOtherSelected = value === "other";
  const [selectedLabel, setSelectedLabel] = React.useState<
    EmailType | undefined
  >(undefined);

  const emails = [
    {
      value: "generalEmail",
      label: "General Email",
    },
    {
      value: "requestEmail",
      label: "Request Email",
    },
    {
      value: "approvedEmail",
      label: "Approved Email",
    },
    {
      value: "fillInfo",
      label: "Fill Info",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  React.useEffect(() => {
    console.log("Value:", value);
    const foundEmail = emails.find(
      (email) => email.value.toLowerCase() === value.toLowerCase()
    );

    console.log("Found Email:", foundEmail);

    if (value.length > 0 && foundEmail) {
      setSelectedLabel(foundEmail);
    } else {
      // Handle the case when no matching email is found or value is empty
      setSelectedLabel(undefined); // or provide a default value
    }

    console.log("Label:", selectedLabel);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value &&
            (emails.find((framework) => framework.value === value)?.label ||
              selectedLabel?.label)}
          {!value && "Email"}
          <Mail className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {value !== "other" && <CommandInput placeholder="Search email..." />}
          {value !== "other" && <CommandEmpty>No email found.</CommandEmpty>}
          {isOtherSelected ? (
            <div className="m-1">
              <Input type="text" placeholder="Subject" className="mb-2" />
              <Textarea placeholder="Type your message here." />
              <div className="w-full flex space-x-2 mt-1">
                <Button
                  onClick={() => {
                    setValue("");
                    // setOpen(false);
                  }}
                  size="sm"
                  variant="outline"
                  className="w-full mt-1"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="w-full mt-1 bg-cyan-500 hover:bg-cyan-600"
                >
                  Send <SendHorizonal className="ml-2" size={15} />
                </Button>
              </div>
            </div>
          ) : (
            <CommandGroup>
              {emails.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(currentValue === "other" ? true : false);
                  }}
                >
                  <div className="flex justify-between items-center w-full">
                    {framework.label}
                    <SendHorizonal className={cn("mr-2 h-4 w-4")} />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
