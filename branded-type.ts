type CompanyID = string & { readonly brand: unique symbol };
type OrderID = string & { readonly brand: unique symbol };
type UserID = string & { readonly brand: unique symbol };

type ID = CompanyID | OrderID | UserID;

function CompanyID(id: string) {
  return id as CompanyID;
}

function OrderID(id: string) {
  return id as OrderID;
}

function UserID(id: string) {
  return id as UserID;
}

function queryForUser(id: UserID) {
  console.log(id);
}

let companyId = CompanyID("190402dc");
let orderId = OrderID("405asc2dc");
let userId = UserID("103csas2");

queryForUser(userId);
queryForUser(companyId); // error
export {};
