/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_logs', {
		'id': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'hrm_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'action': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'request': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'response': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'modified_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'modified_hrm_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'modified_uagent': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'modified_ip': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'modified_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tbl_hrm_logs',
		timestamps: false
	});
};
