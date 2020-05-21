/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_employee_leave_track', {
		'id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'emp_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'application_id': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'attendance_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'leave_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'city_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'leave_status': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'leave_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'leave_reason': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'contact_address': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'alternate_contact': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'approved_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'approved_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'approve_comment': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'created_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'created_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'modified_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tbl_hrm_employee_leave_track',
		timestamps: false
	});
};
