/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_city_machinedetails', {
		'id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'city_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'machine_name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'machine_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'createtime': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'modifiedtime': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'Active': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tbl_hrm_city_machinedetails'
	});
};
