/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('tbl_hrm_employee_leaves', {

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
		'leave_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'total_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'carry_forwaded_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'eligible_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'temp_used_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'main_used_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'temp_pending_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'main_pending_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'lapsed_leaves': {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: "null"
		},
		'leave_year': {
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
		tableName: 'tbl_hrm_employee_leaves',
		timestamps: false
	});
};
