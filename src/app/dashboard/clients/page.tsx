"use client";

import coreApi from "@/lib/coreApi";
import Panel from "../_components/Panel";
import { ClientsListTypes } from "./_types/clientsTypes";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

const getClients = async (): Promise<ClientsListTypes[]> => {
  const { data } = await coreApi.get("/clients/");
  return data;
};

const Page = () => {
  const [clients, setClients] = useState<ClientsListTypes[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getClients().then((response) => {
      setClients(response);
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) return null;

  return (
    <Panel title="Clients">
      <Table className="rounded-md bg-white dark:bg-slate-800">
        <TableCaption>
          A list of bank clients.
        </TableCaption>
        <TableHeader>
          <TableRow className="text-xs">
            <TableHead>ID</TableHead>
            <TableHead>FULL NAME</TableHead>
            <TableHead>GENDER</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>PHONE NUMBER</TableHead>
            <TableHead>IDENTIFICATION NUMBER</TableHead>
            <TableHead>CREDIT SCORE</TableHead>
            <TableHead>IS ACTIVE</TableHead>
          </TableRow>
        </TableHeader >
        <TableBody>
          {clients.map((client, index) => (
            <TableRow
              key={client.id}
            >
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.full_name}</TableCell>
              <TableCell>{
                  client.gender === "F" ? (
                    "Female"
                  ) : client.gender === "M" ? (
                    "Male"
                  ) : client.gender === "O" ? (
                    "Other"
                  ) : "Unknown"
                }</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone_number}</TableCell>
              <TableCell>{client.identification_number}</TableCell>
              <TableCell>{client.credit_score}</TableCell>
              <TableCell>{client.is_active ? "Active" : "Inactive"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Panel>
  );
};

export default Page;
