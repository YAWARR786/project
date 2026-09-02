<?php
/**
 * Plugin Name: Rank N Convert Headless Noindex
 * Description: Keeps the future WordPress frontend out of search results while leaving the REST API available to ranknconvert.com.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function rank_n_convert_is_rest_request() {
    return defined('REST_REQUEST') && REST_REQUEST;
}

add_filter('wp_robots', function ($robots) {
    if (!is_admin() && !rank_n_convert_is_rest_request()) {
        return array(
            'noindex' => true,
            'nofollow' => true,
            'noarchive' => true,
        );
    }

    return $robots;
});

add_action('send_headers', function () {
    if (!is_admin() && !rank_n_convert_is_rest_request()) {
        header('X-Robots-Tag: noindex, nofollow, noarchive', true);
    }
});
