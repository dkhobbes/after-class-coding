<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'Tacos');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '5wQM~|YzOic_Ey:et1-D%kB-!Rp:n^H@2Sjqwp24i:B)YM*w_D=g!^Mb|2w7/i$ ');
define('SECURE_AUTH_KEY',  'yiybN}_xmO@lL#P*qaWJUW(XWN4BlCAi3}%6|=ujy*d^?U-|tUUsQ0<CR3:;7[u(');
define('LOGGED_IN_KEY',    'su8D*IxCe&l?ZzEK2:bGAVcO~.f2kmwVWoD_mpX#$<R}xq,Oyw>!c<EvfX4JKg=^');
define('NONCE_KEY',        '9EG1p2E#;}K1Q-{o=`a8=FZd,)2m}R?ugUk$Xv&>xAS>1sm7JROjZx[yd5plB`T=');
define('AUTH_SALT',        'Y;&%y?4AZJ]1Nxz6*za{Ah@18B~IC(cB~>+ak;#h_yh6n5gm15EWja)OuyCSV>WK');
define('SECURE_AUTH_SALT', '#2 +XsVuzff$MN$.~J<[A+6l8v[ne`(&V66J03FgAE<rnXzKU,.Ol7.G/mZoQG6?');
define('LOGGED_IN_SALT',   'JUcN%nxG>ZW;sCWSPB26pVMF2_OUIJ%[qFc7teIn[-geQg|(jc,b+:}*u.+y0+|0');
define('NONCE_SALT',       'A/UiP!V gcrnQW4O#2N,@bGh!B, dtte+kIy1*ey.L&,I}HS!P&(0+&Fw9nGFBmH');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
