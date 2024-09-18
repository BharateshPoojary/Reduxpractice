export * as amountstateactioncreatorsaccess from "./action-creators/amount-state-action.jsx";

//This export will help us to access all the action from with in the state  folder only.
//If this not done then also ok but for better accessibility we did this or else every time we need to import from actioncreators folder

//export *: This means "export everything" (all named exports) from the specified module.
//as actioncreatorsaccess: This specifies that all exports should be grouped under the name actioncreatorsaccess. When you import this in another file,
//you can access the exports by using actioncreatorsaccess.someExportedFunction or actioncreatorsaccess.someVariable.
//"./action-creators/amount-state-action.jsx": This is the file path from which the named exports are being gathered.