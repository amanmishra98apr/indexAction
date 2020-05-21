/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_backend_users', {
		'a_uid': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'role_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'firstname': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lastname': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'email': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'username': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'password': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'temp_password': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'passwd_change_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'previous_passwd': {
			type: "VARBINARY",
			allowNull: true,
			comment: "null"
		},
		'is_new_hash': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'login_attempt_count': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'login_blocked': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'branch_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'city_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'client_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'restaurant_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'eid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'zone_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'branch_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'city_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'area_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'client_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'merchant_ids': {
			type: "VARBINARY",
			allowNull: true,
			comment: "null"
		},
		'createdby_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'restaurants_ids': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'created_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'active': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'deactivated_by': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'place_order': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'is_superuser': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'ip_allowed': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'allowed_ips': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'device_token_invalid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'session_id': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'session_updated_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'allowed_session': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'logged_in_IP': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'gauth_secret': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'is_gauth_enabled': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'first_user': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'test_flag': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'feedback_notification_count': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'is_online': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'last_updated_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'online_counter': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'feedback_notification_access': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'feedback_chatonline_show': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'landing_page_url': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'master_menu_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'entity': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'sub_entity': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'agency_type': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
    timestamps: false,
		tableName: 'tbl_backend_users'
	});
};
