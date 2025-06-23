$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EmployeeCRUD.feature");
formatter.feature({
  "line": 1,
  "name": "Employee CRUD and Search Operations",
  "description": "",
  "id": "employee-crud-and-search-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "I am able to add edit and search and delete the  employee",
  "description": "",
  "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@employeeCRUD5TCS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to PIM after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Add employee with  first name as \"\u003cfName\u003e\" and mname as \"\u003cmName\u003e\" and lName as \"\u003cLname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I  verify employeeAdded in list with  first name as \"\u003cfName\u003e\" and mname as \"\u003cmName\u003e\" and lName as \"\u003cLname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on Edit button and update below values and save the Data",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "updatedmName",
        "1"
      ],
      "line": 10
    },
    {
      "cells": [
        "updatedLname",
        "1"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I search the employee and ensure that it is searched using below values",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "AutU1Fname1"
      ],
      "line": 13
    },
    {
      "cells": [
        "updatedmName",
        "AutU1Mname1"
      ],
      "line": 14
    },
    {
      "cells": [
        "updatedlName",
        "AutU1Lname1"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select and Delete the Updated Employee and verify employee is not  in search result",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;",
  "rows": [
    {
      "cells": [
        "fName",
        "mName",
        "Lname"
      ],
      "line": 19,
      "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;;1"
    },
    {
      "cells": [
        "AutU1Fname",
        "AutU1Mname",
        "AutU1Lname"
      ],
      "line": 20,
      "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 309100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am able to add edit and search and delete the  employee",
  "description": "",
  "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@employeeCRUD5TCS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to PIM after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Add employee with  first name as \"AutU1Fname\" and mname as \"AutU1Mname\" and lName as \"AutU1Lname\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I  verify employeeAdded in list with  first name as \"AutU1Fname\" and mname as \"AutU1Mname\" and lName as \"AutU1Lname\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on Edit button and update below values and save the Data",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "updatedmName",
        "1"
      ],
      "line": 10
    },
    {
      "cells": [
        "updatedLname",
        "1"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I search the employee and ensure that it is searched using below values",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "AutU1Fname1"
      ],
      "line": 13
    },
    {
      "cells": [
        "updatedmName",
        "AutU1Mname1"
      ],
      "line": 14
    },
    {
      "cells": [
        "updatedlName",
        "AutU1Lname1"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select and Delete the Updated Employee and verify employee is not  in search result",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeCRUDSteps.navigate_to_PIM_after_log_in_with_Admin_user()"
});
formatter.write("Starting the Orange HRM Application");
formatter.write("Loggin into the Orange HRM Application");
formatter.embedding("image/png", "embedded0.png");
formatter.write("Navigating to the PIM page ....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 25955289800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutU1Fname",
      "offset": 36
    },
    {
      "val": "AutU1Mname",
      "offset": 62
    },
    {
      "val": "AutU1Lname",
      "offset": 88
    }
  ],
  "location": "EmployeeCRUDSteps.i_Add_employee_with_first_name_as_and_mname_as_and_lName_as(String,String,String)"
});
formatter.write("Navigating to the add new employee page .......");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 11572965400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutU1Fname",
      "offset": 53
    },
    {
      "val": "AutU1Mname",
      "offset": 79
    },
    {
      "val": "AutU1Lname",
      "offset": 105
    }
  ],
  "location": "EmployeeCRUDSteps.i_verify_employeeAdded_in_list_with_first_name_as_and_mname_as_and_lName_as(String,String,String)"
});
formatter.write("Navigating to Employee List Page.....");
formatter.write("Searching the newly added amp in the list....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 11484138600,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeCRUDSteps.i_click_on_Edit_button_and_update_below_values_and_save_the_Data(DataTable)"
});
formatter.write("Editing the searched employee details....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 31456373900,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeCRUDSteps.i_search_the_employee_and_ensure_that_it_is_searched_using_below_values(DataTable)"
});
formatter.write("Navigating to Employee List Page to confirm updated values.....");
formatter.write("Searching the Updated employee Info.....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 11616590900,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeCRUDSteps.i_select_and_Delete_the_Updated_Employee_and_verify_employee_is_not_in_search_result()"
});
formatter.write("Deleting the searched employee.....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 10492689500,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 748230100,
  "status": "passed"
});
});