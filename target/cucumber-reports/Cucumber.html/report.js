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
  "duration": 251900,
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
formatter.write("There is some Exception in Fluent Wait checking--  invalid session id: session deleted as the browser has closed the connection\nfrom disconnected: not connected to DevTools\n  (Session info: MicrosoftEdge\u003d137.0.3296.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OLAS-PROBOOK\u0027, ip: \u002710.0.11.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 137.0.3296.93, fedcm:accounts: true, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:64896}, msedge: {msedgedriverVersion: 137.0.3296.93 (114b4a913acd..., userDataDir: C:\\Users\\HPPROB~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b10dbc9b6ce07e4a2d08677b13239ad3\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d\u0027username\u0027]}");
formatter.write(" Error on typeing the text in element after wating !");
formatter.write("There is some Exception in Fluent Wait checking--  invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OLAS-PROBOOK\u0027, ip: \u002710.0.11.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 137.0.3296.93, fedcm:accounts: true, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:64896}, msedge: {msedgedriverVersion: 137.0.3296.93 (114b4a913acd..., userDataDir: C:\\Users\\HPPROB~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b10dbc9b6ce07e4a2d08677b13239ad3\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d\u0027password\u0027]}");
formatter.write(" Error on typeing the text in element after wating !");
formatter.write("There is some Exception in Fluent Wait checking--  invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OLAS-PROBOOK\u0027, ip: \u002710.0.11.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 137.0.3296.93, fedcm:accounts: true, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:64896}, msedge: {msedgedriverVersion: 137.0.3296.93 (114b4a913acd..., userDataDir: C:\\Users\\HPPROB~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b10dbc9b6ce07e4a2d08677b13239ad3\n*** Element info: {Using\u003dxpath, value\u003d//button[@type\u003d\u0027submit\u0027]}");
formatter.write(" Error on clicking the element after wating !");
formatter.write("There is some Exception in Fluent Wait checking--  invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OLAS-PROBOOK\u0027, ip: \u002710.0.11.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 137.0.3296.93, fedcm:accounts: true, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:64896}, msedge: {msedgedriverVersion: 137.0.3296.93 (114b4a913acd..., userDataDir: C:\\Users\\HPPROB~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b10dbc9b6ce07e4a2d08677b13239ad3\n*** Element info: {Using\u003dxpath, value\u003d//h6[text()\u003d\u0027Dashboard\u0027]}");
formatter.write(" Error on fetching  the text in element after wating !");
formatter.result({
  "duration": 13160776000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OLAS-PROBOOK\u0027, ip: \u002710.0.11.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 137.0.3296.93, fedcm:accounts: true, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:64896}, msedge: {msedgedriverVersion: 137.0.3296.93 (114b4a913acd..., userDataDir: C:\\Users\\HPPROB~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b10dbc9b6ce07e4a2d08677b13239ad3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.qa.util.CaptureScreenshot.captureImage(CaptureScreenshot.java:21)\r\n\tat com.qa.stepdefinations.EmployeeCRUDSteps.navigate_to_PIM_after_log_in_with_Admin_user(EmployeeCRUDSteps.java:48)\r\n\tat ✽.Given Navigate to PIM after log in with Admin user(EmployeeCRUD.feature:5)\r\n",
  "status": "failed"
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
formatter.result({
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EmployeeCRUDSteps.i_click_on_Edit_button_and_update_below_values_and_save_the_Data(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EmployeeCRUDSteps.i_search_the_employee_and_ensure_that_it_is_searched_using_below_values(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EmployeeCRUDSteps.i_select_and_Delete_the_Updated_Employee_and_verify_employee_is_not_in_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 568761100,
  "status": "passed"
});
});