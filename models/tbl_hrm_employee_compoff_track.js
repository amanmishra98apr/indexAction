/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_employee_compoff_track', {
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
		'compoff_type': {
			type: DataTypes.INTEGER,
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
		'status': {
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
		tableName: 'tbl_hrm_employee_compoff_track'
	});
};
