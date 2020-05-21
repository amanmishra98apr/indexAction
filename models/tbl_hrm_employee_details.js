/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_employee_details', {
		'id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'employee_firstname': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'employee_middlename': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'employee_lastname': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'grab_id': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'a_uid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'city_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'branch_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'designation_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'department_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'reporting_id': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'approved_by': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'employee_weekoff': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'official_email': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'personal_email': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'official_contact': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'personal_contact': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'current_address': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'permanent_address': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'profile_photo': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'date_of_birth': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'date_of_joining': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'date_of_permanent': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'date_of_leaving': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'expected_date_of_permanent': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'emergency_contact_details': {
			type: "VARBINARY",
			allowNull: true,
			comment: "null"
		},
		'checkin_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'gender': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'marital_status': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'languages_known': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'status': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'qualification': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'hobbies': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'emp_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'food_categroy': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'OHC': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'access_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'last_attendance_calculated': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'last_checkin_checkout_updated': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'created_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'modified_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'specialleaves_logs': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'created_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'modified_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tbl_hrm_employee_details',
		timestamps: false
	});
};
