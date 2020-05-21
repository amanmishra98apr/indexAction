/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_roster_data_upload', {
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
		'from_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'to_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'file_url': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'status': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'created_auid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'created_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'modified_auid': {
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
		tableName: 'tbl_hrm_roster_data_upload'
	});
};
