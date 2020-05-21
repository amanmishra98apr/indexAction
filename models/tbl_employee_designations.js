/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_employee_designations', {
		'id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'designation_name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'designation_short_code': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'parent_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'department_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'designation_created_a_uid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'designation_created_ip': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'designation_created_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'active': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tbl_employee_designations',
		timestamps: false
	});
};
