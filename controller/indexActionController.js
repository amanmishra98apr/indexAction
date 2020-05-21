var tblhrmemployeedetails = require("../models/tbl_hrm_employee_details")
var tblemployeedepartments = require("../models/tbl_employee_departments")
var tblemployeedesignations = require("../models/tbl_employee_designations")
var tblbackendusers = require("../models/tbl_backend_users")
var tblcommongrabcities = require("../models/tbl_common_grab_cities")
var tblcommongrabbranches = require("../models/tbl_common_grab_branches")
const sequalize = require("../common/dbconfig").sequelize;
const Sequalize = require("sequelize");
const { Op } = require("sequelize");
var request = require('request');
tblhrmemployeedetails = tblhrmemployeedetails(sequalize, Sequalize)
tblemployeedepartments = tblemployeedepartments(sequalize, Sequalize)
tblemployeedesignations = tblemployeedesignations(sequalize, Sequalize)
tblbackendusers = tblbackendusers(sequalize, Sequalize)
tblcommongrabcities = tblcommongrabcities(sequalize, Sequalize)
tblcommongrabbranches = tblcommongrabbranches(sequalize, Sequalize)
var http = require('http')



exports.indexAct = async (req, res, next) => {
  var city_array = {}
  var dep_arr = {}
  var des_arr = {}
  a_uid = req.body.a_uid
  var HRMMode = req.body.HRMMode
  if (HRMMode == '1') {
    city = "";
    where = "";
    title = "HRM | Employee List";
    var whereCondition = { a_uid: a_uid }/****************************** */
    var backEndDetails = getBackendDetails(whereCondition);
    userData = await backEndDetails;
    if (userData.length > 0) {
      city_ides_list = userData[0].city_ids.split(",")
      branch_ides_list = userData[0].branch_ids.split(",")
      zone_id_list = userData[0].zone_ids.split(",")
    }
    if (userData[0].city_ids != '') {
      whereCondition = {
        [Op.and]: [
          { id: city_ides_list },
          { active: 1 }
        ]
      }
      var zoneCities = await getCityDetails(whereCondition)
      //res.json(zoneCities)
    }
    else if (userData[0].branch_ids != '') {
      whereCondition = {
        [Op.and]: [
          { branch_id: branch_ides_list },
          { active: 1 }
        ]
      }
      var zoneCities = await getCityDetails(whereCondition)
      //res.json(zoneCities)
    }
    else if (userData[0].zone_ids != '') {
      whereCondition = {
        [Op.and]: [
          { zone_id: zone_id_list },
          { active: 1 }
        ]
      }
      var zoneBranches = await getGrabBranches(whereCondition)
      //res.json(branchDetails)
      zIds = []
      if (zoneBranches.length > 0) {
        for (i = 0; i < zoneBranches.length; i++) {
          zIds.push(zoneBranches[i].id);
        }
        //console.log(zIds)
        var whereCondition = {
          [Op.and]: [
            { branch_id: zIds },
            { active: 1 }
          ]
        }
        var zoneCities = await getCityDetails(whereCondition)
        //res.json(zoneCities)
      }
    }
    var city_arr = {}
    if (zoneCities.length > 0) {
      for (i = 0; i < zoneCities.length; i++) {
        value = zoneCities[i].id
        name = zoneCities[i].name
        city_arr[value] = name;
      }
      //res.json(city_arr)
    }
    else {
      city_arr = {}
    }

    console.log(city_ides_list)
    //console.log(userData)
    status = {
      '1': 'To Join', '2': 'Active', '3': 'Probation', '4': 'Notice Period',
      '5': 'Left', '6': 'Terminated', '7': 'Interview Scheduled', '8': 'Interview Done'
    }
    var attribute = ['id', 'department_name']
    var deptDetails = getDeptDetails(attribute);
    dep = await deptDetails;
    for (var i = 0; i < dep.length; i++) {
      dep_arr[dep[i].id] = dep[i].department_name
    }
    var attribute = ['id', 'designation_name']
    var desDetails = getDesDetails(attribute)
    des = await desDetails;
    for (var i = 0; i < des.length; i++) {
      des_arr[des[i].id] = des[i].designation_name
    }
    /*console.log(des_arr)
    console.log(dep_arr) 
    console.log(status)
    console.log(city_arr)*/
    city_id = []
    for (i in city_arr) {
      city_id.push(i)
    }
    console.log(city_id)
    emptypeArr = { "1": "Full Time", "2": "Part Time" }
    accessArr = {
      'admin_auids': [158, 162, 1503, 3025],// Level - 1 admin access a_uids     
      'hr_auids': [129, 151, 205, 4599, 4596, 4108], // Level - 2 hr access a_uids
    }
    var id = 0;
    reportingArr = {}
    if (id > 0 || a_uid > 0) {
      if (id > 0) {
        var whereCondition = { reporting_id: `${id}` }
      }
      else {
        var whereCondition = { a_uid: `${a_uid}` }
        var userDetail = await getEmpDetail(whereCondition)
        //res.json(userDetail)
        console.log("doooonnne")
        console.log(userDetail[0].id)
        if (userDetail.length > 0) {
          id = userDetail[0].id;
          var whereCondition = { reporting_id: '`${id}`' }
          var userDetail2 = await getEmpDetail(whereCondition)
          //res.json(userDetail2)
          console.log("if is running")
        }
      }
      if (userDetail2 != '') {
        var whereCondition = { reporting_id: '`${id}`' }
        var selectData = await getEmpDetail(whereCondition)
        //res.json(selectData)
        for (i = 0; i < selectData.length; i++) {
          reportingArr[selectData[i].id] = selectData[i].id
        }
      }
    }
    //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    if (accessArr['admin_auids'].includes(a_uid)) {
      role_id = 1; //Admin
    }
    else {
      if (accessArr['hr_auids'].includes(a_uid)) {
        role_id = 2; //HR
      } else {
        if (Object.keys(reportingArr).length > 0) {
          role_id = 3; //HOD
        } else {
          role_id = 0; // Not Access
        }
      }
    }
    console.log(role_id)
    var accessArr = { 'role_id': role_id, 'reporting_ids': reportingArr }
    console.log("as", accessArr)
    ////////////////////////////////////////////////////////////
    HRM_role_id = accessArr['role_id'];
    console.log("hrm", HRM_role_id)
    console.log('hrm2', Object.keys(accessArr['reporting_ids']).length)

    if (HRM_role_id == 1) { // Admin
      whereCondition = { [Op.gt]: 6 }
    }
    else if (HRM_role_id == 2) { //HR
      if (Object.keys(accessArr['reporting_ids']).length > 0) {
        var whereCondition = {
          [Op.or]: [
            { city_id: city_id },
            { id: Object.values(accessArr['reporting_ids']) }
          ]
        }
      } else {
        var whereCondition = {
          [Op.and]: [
            { city_id: city_id },
            { a_uid: a_uid }
          ]
        }
      }
    }
    else if (HRM_role_id == 3) { // HOD               
      var whereCondition = { id: Object.values(accessArr['reporting_ids']) }
    }
    else { // 0 - No access
      whereCondition = { id: '-1' }
      console.log("hrm id is zero")
    }

    var e_id = req.body.eid;
    var grab_id = req.body.grabid
    var client_name = req.body.client_name
    var dep_name = req.body.dep_name
    var cityid = req.body.city_id
    var dep_id = req.body.dep_id
    var emp_type = req.body.emp_type
    var status_id = req.body.status_id
    var des_id = req.body.des_id
    var accessArr = req.body.a_uid
    var a_uid = req.body.a_uid

    //    All filter working code start
    if (e_id != '') {
      //''$where.= " AND id   LIKE  ".$eid. " ";
      whereCondition['id'] = e_id
      console.log(whereCondition)
    }
    if (grab_id != '') {
      whereCondition['grab_id'] = grab_id
      console.log(whereCondition)
    }
    if (client_name != '') {
      client_name_list = client_name.split(" ")
      whereCondition['employee_firstname'] = client_name_list[0];
      whereCondition['employee_lastname'] = client_name_list[1]
      console.log(whereCondition)
    }
    if (dep_name != '') {
      client_name = client_name.split(" ")
      whereCondition['employee_firstname'] = client_name[0]
      console.log(whereCondition)
      console.log(city_id)
    }
    if (cityid != '') {
      cities = city_id
      whereCondition['city_id'] = cities
      console.log(whereCondition)
      console.log(dep_arr)
    }
    if (dep_id != '') {
      department = Object.keys(dep_arr)
      whereCondition['department_id'] = department
      console.log(whereCondition)
    }
    /*if (!empty($emp_type)) {
    $where .= ' AND emp_type="'.$emp_type.'"';
    } */
    if (status_id != '') {
      status_ids = status_id.split(",")
      whereCondition['status'] = status_ids
      console.log(whereCondition)
    }
    if (des_id != '') {
      des_ids = des_ids.split(",")
      whereCondition['designation_id'] = des_ids
    }
    //aaaaaaaaaaaaaaaaaaaa
    var darr = await getEmpDetail2(whereCondition)
    console.log(darr)
    totalItemCount = darr > 0 ? darr : 0;
    var selectData = await getEmpDetail3(whereCondition)
    //res.json(selectData)
    console.log("total ",darr)
    //console.log(city_arr)
    //console.log(dep_arr)
    //console.log(des_arr)
    //console.log(status)
var start = []
    for (i = 0; i < darr; i++) {
      data = {}
      start.push(data)
      //console.log(selectData[i].id)
      //to get city name
      cityname = city_arr[selectData[i].city_id];
      //to get department name
      department_name = dep_arr[selectData[i].department_id];
      //Designation name
      designation_name = des_arr[selectData[i].designation_id];
      //status text
      status_text = status[selectData[i].status];
      //status
      emp_status = selectData[i].status;
      
      
      data['grab_id'] = selectData[i].grab_id;
      data['eid']= selectData[i].id;
      data['city_id'] = selectData[i].city_id;
      data['department_id'] = department_name
      data['official_email'] = selectData[i].official_email;
      data['official_contact'] = selectData[i].official_contact;
      data['employee_firstname'] = selectData[i].employee_firstname + " " + selectData[i].employee_lastname;
      data['emp_type']=emptypeArr[selectData[i].emp_type]
      data['city_id'] = cityname
      data['department_id'] = department_name
      data['designation_id'] = designation_name 
      data['emp_text'] = status_text
      if (emp_status == "1") {
        array_value = "7,8";
        emparr = array_value.split(",")
        for (i = 0; i < emparr.length; i++) {
          indexCompleted = emparr[i];
          status[indexCompleted] = ""
        }
        var statusarr = status;
      }
      else if (emp_status == "2") {
        array_value = "1,7,8";
        emparr = array_value.split(",")
        for (i = 0; i < emparr.length; i++) {
          indexCompleted = emparr[i];
          status[indexCompleted] = ""
        }
        var statusarr = status;
      }
      else if (emp_status == "5" || emp_status == "6") {
        array_value = emp_status == '5' ? "1,3,4,6,7,8" : "1,3,4,5,7,8";
        emparr = array_value.split(",")
        for (i = 0; i < emparr.length; i++) {
          indexCompleted = emparr[i];
          status[indexCompleted] = ""
        }
        var statusarr = status;
      }
      else {
        var statusarr = status;
      }
      data['status'] = statusarr;
    }
    //console.log(whereCondition)
    res.json(data)
  }
}

async function getEmpDetail2(whereCondition) {
  try {
    return await tblhrmemployeedetails.count({
     where: whereCondition
      
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

async function getEmpDetail3(whereCondition) {
  try {
    return await tblhrmemployeedetails.findAll({
     where: whereCondition
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}


async function getEmpDetail(whereCondition) {
  try {
    return await tblhrmemployeedetails.findAll({
      attributes: ['id', 'reporting_id', 'a_uid'],
      where: whereCondition
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

async function getGrabBranches(whereCondition) {
  try {
    return await tblcommongrabbranches.findAll({
      attributes: ['id'],
      where: whereCondition
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

async function getCityDetails(whereCondition) {
  try {
    return await tblcommongrabcities.findAll({
      attributes: ['id', 'name'],
      where: whereCondition
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

async function getBackendDetails(whereCondition) {
  try {
    return await tblbackendusers.findAll({
      attributes: ['zone_ids', 'branch_ids', 'city_ids', 'role_id'],
      where: whereCondition
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

async function getDeptDetails(attribute) {
  try {
    return await tblemployeedepartments.findAll({
      attributes: attribute
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

async function getDesDetails(attribute) {
  try {
    return await tblemployeedesignations.findAll({
      attributes: attribute
    });
  }
  catch (error) {
    console.log(error);
    return [];
  }
}
/*
exports.indexAct = (req, res, next) => {
  var gb = tblcommongrabcities.findAll({
  })

  gb.then(zoneCities => {
    res.json(zoneCities)
    console.log("done emp detailes");
})
}*/
