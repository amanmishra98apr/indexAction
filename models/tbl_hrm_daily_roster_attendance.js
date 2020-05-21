/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_daily_roster_attendance', {
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
		'city_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'attendance_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'absent_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'checkin_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'checkout_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'comments': {
			type: "VARBINARY",
			allowNull: true,
			comment: "null"
		},
		'updated_type': {
			type: DataTypes.INTEGER,
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
		'modified_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'active': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tbl_hrm_daily_roster_attendance',
		timestamps: false
	});
};
