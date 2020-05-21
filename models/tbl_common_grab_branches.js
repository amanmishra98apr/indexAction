/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_common_grab_branches', {
		'id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'branch_code': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'branch_name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'state_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'zone_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'city_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'active': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'lat': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'long': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'branch_color_code': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'ivr_number': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		}
	}, {timestamps: false,
		tableName: 'tbl_common_grab_branches'
	});
};
