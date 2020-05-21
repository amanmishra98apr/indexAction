/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_leave_types', {
		'id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'leave_name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'short_code': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'color_code': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'calendar_codes': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'apply_leave': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'active': {
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
		}
	}, {
		tableName: 'tbl_hrm_leave_types'
	});
};
