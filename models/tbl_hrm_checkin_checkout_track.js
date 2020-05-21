/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_hrm_checkin_checkout_track', {
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
		'type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'date': {
			type: DataTypes.DATE,
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
		'created_auid': {
			type: DataTypes.INTEGER,
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
		tableName: 'tbl_hrm_checkin_checkout_track'
	});
};
