import { Payment,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      role: "Vice President",
      status: "success",
      username: "Will Ross",
      email: "Will.Ross@gmail.com",
    },
    {
      id: "728ed522",
      role: "President",
      status: "success",
      username: "Alex Cameron",
      email: "Alex.Cameron@gmail.com",
    },
    {
      id: "728ed523",
      role: "Training Coordinator",
      status: "success",
      username: "Charles Robinson",
      email: "Charles.Robinson@gmail.com",
    },
    {
      id: "728ed524",
      role: "Communications Coordinator",
      status: "failed",
      username: "Manav Maheshwari",
      email: "Manav.Maheshwari@gmail.com",
    },
    {
      id: "728ed525",
      role: "Treasurer",
      status: "success",
      username: "Maria Lefter",
      email: "Maria.Lefter@gmail.com",
    },
    {
      id: "728ed526",
      role: "Secretary",
      status: "success",
      username: "Fran Stewart",
      email: "Fran.Stewart@gmail.com",
    }
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Members</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default PaymentsPage;